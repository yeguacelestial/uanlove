from typing import List
from pydantic import BaseModel

class LikesReceived(BaseModel):
    user_id: str
    likes: List[str] = []