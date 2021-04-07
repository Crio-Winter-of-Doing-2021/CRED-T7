
from django.contrib import admin
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.conf.urls import url
from django.views.generic import TemplateView

schema_view = get_schema_view(
   openapi.Info(
      title="CRED API",
      default_version='v1.0',
      description="CRED backend API.",
      terms_of_service="https://www.google.com/policies/terms/",
      
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', include("frontend.urls")),
    path('admin/', admin.site.urls),
    path('', include("accounts.urls")),
    path('', include("cards.urls")),
    url('swagger', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
