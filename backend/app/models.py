from sqlalchemy import Column, Integer, String, Float, ForeignKey, Text
from sqlalchemy.orm import relationship
from .database import Base
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(128), unique=True, index=True, nullable=False)
    hashed_password = Column(String(256), nullable=False)
class Customer(Base):
    __tablename__ = "customers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    phone = Column(String(64))
    address = Column(String(1024))
    page_no = Column(String(64))
    debts = relationship("Debt", back_populates="customer", cascade="all, delete-orphan")
class Debt(Base):
    __tablename__ = "debts"
    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, ForeignKey("customers.id"), nullable=False)
    date = Column(String(32), default="")
    item = Column(String(255), default="")
    quantity = Column(Float, default=0.0)
    price = Column(Float, default=0.0)
    total = Column(Float, default=0.0)
    receivable = Column(Float, default=0.0)
    note = Column(Text, default="")
    customer = relationship("Customer", back_populates="debts")
