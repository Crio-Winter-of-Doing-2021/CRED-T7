from django.apps import AppConfig


class CardsConfig(AppConfig):
    name = 'cards'
    # def ready(self):
    #         from scheduler import scheduler
    #         scheduler.start()

class TransactionsConfig(AppConfig):
    name = 'transactons'
