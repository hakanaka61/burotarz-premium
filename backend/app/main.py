from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas
from .database import engine, SessionLocal
from .auth import create_access_token
models.Base.metadata.create_all(bind=engine)
app = FastAPI(title="Burotarz API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
@app.post('/auth/login')
def login(username: str, password: str):
    if username == 'admin' and password == 'password':
        token = create_access_token({"sub": username})
        return {"access_token": token}
    raise HTTPException(status_code=401, detail='Bad credentials')
@app.get('/customers', response_model=list[schemas.CustomerOut])
def list_customers(q: str = "", db: Session = Depends(get_db)):
    query = db.query(models.Customer)
    if q:
        query = query.filter(models.Customer.name.ilike(f"%{q}%"))
    return query.order_by(models.Customer.name).all()
@app.post('/customers', response_model=schemas.CustomerOut)
def create_customer(payload: schemas.CustomerIn, db: Session = Depends(get_db)):
    c = models.Customer(**payload.dict())
    db.add(c); db.commit(); db.refresh(c)
    return c
@app.put('/customers/{id}', response_model=schemas.CustomerOut)
def update_customer(id: int, payload: schemas.CustomerIn, db: Session = Depends(get_db)):
    c = db.query(models.Customer).get(id)
    if not c: raise HTTPException(status_code=404, detail='not found')
    for k,v in payload.dict().items(): setattr(c,k,v)
    db.commit(); db.refresh(c)
    return c
@app.delete('/customers/{id}')
def delete_customer(id: int, db: Session = Depends(get_db)):
    c = db.query(models.Customer).get(id)
    if not c: raise HTTPException(status_code=404, detail='not found')
    db.delete(c); db.commit()
    return {"status":"deleted"}
@app.get('/customers/{id}/debts', response_model=list[schemas.DebtOut])
def get_debts(id:int, db: Session = Depends(get_db)):
    return db.query(models.Debt).filter_by(customer_id=id).all()
@app.post('/customers/{id}/debts', response_model=list[schemas.DebtOut])
def save_debts(id:int, payload: list[schemas.DebtIn], db: Session = Depends(get_db)):
    db.query(models.Debt).filter_by(customer_id=id).delete()
    created=[]
    for r in payload:
        obj = models.Debt(customer_id=id, **r.dict())
        db.add(obj); db.flush(); created.append(obj)
    db.commit()
    return created
