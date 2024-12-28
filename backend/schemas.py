from typing import Optional
from pydantic import BaseModel



class TableSession(BaseModel):
    session_id: str
    user_username: str

    class Config:
        from_attributes = True


class User(BaseModel):
    username: str
    password: bytes
    chips: int
    active_session: Optional[TableSession] = None

    class Config:
        from_attributes = True
