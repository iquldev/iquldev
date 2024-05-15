import random
from .. import loader, utils
from datetime import timedelta
from telethon import functions
from telethon.tl.types import Message


@loader.tds
class FarmIrisMod(loader.Module):
    """Авто фарм райкоинов"""

    strings = {
        "name": "raifarmer",
        "raion": "<i>✅Отложенка создана, автофарминг запущен, всё начнётся через 20 секунд...</i>",
        "raion_already": "<i>Уже запущено</i>",
        "raioff": "<i>❌Автофарминг остановлен.",
    }

    def __init__(self):
        self.name = self.strings["name"]

    async def client_ready(self, client, db):
        self.client = client
        self.db = db
        self.myid = (await client.get_me()).id
        self.iris = 6760863944

    async def raioncmd(self, message):
        """Запустить автофарминг"""
        status = self.db.get(self.name, "status", False)
        if status:
            return await message.edit(self.strings["raion_already"])
        self.db.set(self.name, "status", True)
        await self.client.send_message(
            self.iris, "это работает!", schedule=timedelta(seconds=10)
        )
        await message.edit(self.strings["raion"])

    async def raioffcmd(self, message):
        """Остановить автофарминг"""
        self.db.set(self.name, "status", False)
        coins = self.db.get(self.name, "coins", 0)
        if coins:
            self.db.set(self.name, "coins", 0)
        await message.edit(self.strings["raioff"].replace("%coins%", str(coins)))

    async def watcher(self, event):
        if not isinstance(event, Message):
            return
        chat = utils.get_chat_id(event)
        if chat != self.iris:
            return
        status = self.db.get(self.name, "status", False)
        if not status:
            return
        if event.raw_text == "это работает!":
            return await self.client.send_message(
                self.iris, "это работает!", schedule=timedelta(minutes=random.randint(1, 5))
            )
        if event.sender_id != self.iris:
            return