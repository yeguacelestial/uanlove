from pydantic import BaseModel

class School(BaseModel):
    id: int
    name: str