from pydantic import BaseModel
from typing import Optional, List
class DebtIn(BaseModel):
    date: Optional[str] = ""
    item: Optional[str] = ""
    quantity: float = 0
    price: float = 0
    total: float = 0
    receivable: float = 0
class DebtOut(DebtIn):
    id: int
    class Config:
        orm_mode = True
class CustomerIn(BaseModel):
    name: str
    phone: Optional[str] = None
    address: Optional[str] = None
    page_no: Optional[str] = None
class CustomerOut(CustomerIn):
    id: int
    debts: List[DebtOut] = []
    class Config:
        orm_mode = True
