from typing import List
from pydantic import BaseModel

class Matches(BaseModel):
    student_id: int
    matches: List[str] = []