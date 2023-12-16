from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Routine, Exercise

# UserModel = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ( "id", "username", )


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ( "id", "username", "email", "password" )
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'], 
            validated_data['password'])
        return user


class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'