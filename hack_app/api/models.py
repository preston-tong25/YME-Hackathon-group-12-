from django.db import models
import string
import random

def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0: #ensures code is unique
            break

    return code



# Create your models here. (store data)

class User(models.Model):
    username = models.CharField(max_length=10, default="", unique=True)
    password = models.CharField(max_length=50, default="", unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    #can also add methods: