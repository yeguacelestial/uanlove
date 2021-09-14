from pydantic import BaseModel

class Hobby(BaseModel):
    id: int
    name: str