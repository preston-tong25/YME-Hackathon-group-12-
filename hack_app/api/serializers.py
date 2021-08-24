from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #id is used to uniquely identify model from other models (generated)
        fields = ('id', 'username', 'password', 'created_at')