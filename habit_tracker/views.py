#backend views.py: This file should contain the Django view functions that handle the API endpoints for the backend app.

from habit_tracker.forms import CustomUserCreationForm
from django.contrib.auth import login
from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status, generics
from .serializers import UserSerializer, RoutineSerializer, ExerciseSerializer
from .models import Routine, Exercise
from django.contrib.auth.models import User
import json


def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Log the user in.
            login(request, user)
            return redirect('home')  # Redirect to a success page or homepage
    else:
        form = CustomUserCreationForm()
    return render(request, 'frontend/registration/signup.html', {'form': form})


@api_view(['POST'])
def create_user(request):    
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            new_user = serializer.save()
            # Return a successful response
            return JsonResponse({'message': 'User created successfully!'}, status=status.HTTP_201_CREATED)
        else:
            # Return an error response
            return JsonResponse({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_user(request):
    if request.method == 'GET':
        username = request.GET.get('username')
        try:
            user = User.objects.get(username=username)
            serializer = UserSerializer(user)
            data = serializer.data
            return JsonResponse(data)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User does not exist.'}, status=status.HTTP_404_NOT_FOUND)


class RoutineView(APIView):
    def get(self, request):
        routine = Routine.objects.all()
        serializer = RoutineSerializer(routine, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = RoutineSerializer(data=data)
        if serializer.is_valid():
            SerializerResponse = serializer.save()
            id = SerializerResponse.pk
            return Response({'message': 'Success', 'id': id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ExerciseView(APIView):
    def get(self, request):
        exercise = Exercise.objects.all()
        serializer = ExerciseSerializer(exercise, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = ExerciseSerializer(data=data)
        if serializer.is_valid():
            SerializerResponse = serializer.save()
            id = SerializerResponse.pk
            return Response({'message': 'Success', 'id': id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# @api_view(['GET', 'POST'])
# def routine(request):
#     if request.method == 'GET':
#         routine = Routine.objects.all()
#         serializer = RoutineSerializer(routine, many=True)
#         return JsonResponse(serializer.data, safe=False)
#     elif request.method == 'POST':
#         data = request.data
#         serializer = RoutineSerializer(data=data)
#         print("we are in views.py def routine")
#         if serializer.is_valid():
#             serializer.save()
#             print("SERIALIZER SAVED")
#             return JsonResponse({'message': 'Success'}, status=status.HTTP_201_CREATED)
#         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# @api_view(['GET', 'POST'])
# def exercise(request):
#     if request.method == 'GET':
#         exercise = Exercise.objects.all()
#         serializer = ExerciseSerializer(exercise, many=True)
#         return JsonResponse(serializer.data, safe=False)
#     elif request.method == 'POST':
#         serializer = ExerciseSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse({'message': 'Success'}, status=status.HTTP_201_CREATED)
#         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)