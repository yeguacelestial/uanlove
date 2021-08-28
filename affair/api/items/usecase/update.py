from core.models.item import Item

def update_item(item_id: int, item: Item):
    return {
        "item_name": item.name,
        "item_id": item_id
    }