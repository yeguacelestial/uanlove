from typing import List
from pydantic import BaseModel

class DislikesReceived(BaseModel):
    user_id: str
    likes: List[str] = []