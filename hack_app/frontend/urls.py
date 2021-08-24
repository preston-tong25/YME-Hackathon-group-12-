from django.urls import path
from .views import index

#main url
urlpatterns = [
    path('', index) #'home page'
]
