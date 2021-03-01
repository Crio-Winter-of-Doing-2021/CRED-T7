from django.urls import path, include
from .api import LoginAPI, UserAPI, SignUpAPI
from knox import views as knox_views

urlpatterns = [
    path('login', LoginAPI.as_view()),
    path('signup', SignUpAPI.as_view()),
    path('user', UserAPI.as_view()),
    path('logout', knox_views.LogoutView.as_view(), name="knox-logout"),
]
