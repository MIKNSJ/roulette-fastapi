from sqlalchemy import Integer, Column, ForeignKey, String, LargeBinary
from sqlalchemy.orm import relationship
from database import Base



class User(Base):
    __tablename__ = "users"

    username = Column(String, unique=True, index=True, primary_key=True)
    password = Column(LargeBinary)
    chips = Column(Integer)
    active_session = relationship("TableSession", back_populates="user")


class TableSession(Base):
    __tablename__ = "sessions"

    session_id = Column(String, unique=True, index=True, primary_key=True)
    user_username = Column(String, ForeignKey("users.username"))
    user = relationship("User", back_populates="active_session")
