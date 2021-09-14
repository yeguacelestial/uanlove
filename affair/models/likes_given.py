from typing import List
from pydantic import BaseModel

class LikesGiven(BaseModel):
    user_id: str
    likes: List[str] = []