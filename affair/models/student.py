from typing import List, Optional
from pydantic import BaseModel

class Student(BaseModel):
    id: int
    name: str
    age: int
    bio_description: Optional[str] = None
    school: str
    pictures: List[str] = []
    hobbies: List[str] = []
    level: str
    orientations: List[str] = []
    gender: str
    preference: str
    email: str
    city: str