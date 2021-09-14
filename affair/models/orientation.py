from pydantic import BaseModel

class LikesGiven(BaseModel):
    id: str
    name: str