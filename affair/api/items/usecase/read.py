from typing import Optional

def read_item(item_id: int, q: Optional[str] = None):
    return {
        "item_id": item_id,
        "q": q
    }