from django.shortcuts import render

# Create your views here.
# render index template in templates/index.html and let react handle the rest


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')