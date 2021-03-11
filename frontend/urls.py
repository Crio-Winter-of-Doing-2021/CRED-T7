from django.urls import path
from . import views

urlpatterns = [
    path("site", views.index)
]
