from fastapi import FastAPI

from api.items.usecase.update import update_item
from api.items.usecase.read import read_item

app = FastAPI()

app.add_api_route("/items/{item_id}", update_item)
app.add_api_route("/items/{item_id}", read_item)