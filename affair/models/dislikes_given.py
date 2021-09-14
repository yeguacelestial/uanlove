from typing import List
from pydantic import BaseModel

class DislikesGiven(BaseModel):
    user_id: str
    dislikes: List[str] = []