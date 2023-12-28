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
            serializer.save()
            return Response({'message': 'Success'}, status=status.HTTP_201_CREATED)
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
    

@api_view(['GET', 'POST'])
def exercise(request):
    if request.method == 'GET':
        exercise = Exercise.objects.all()
        serializer = ExerciseSerializer(exercise, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        serializer = ExerciseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message': 'Success'}, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





# from django.shortcuts import render, redirect, get_object_or_404
# from django.contrib.auth import login
# from django.contrib.staticfiles import finders
# from django.http import HttpResponseRedirect
# from .models import PracticeLog, Routine, Exercise
# from .forms import CustomUserCreationForm
# from .forms import RoutineForm, ExerciseFormSet
# from frontend.data import textContent
# from django.views.decorators.csrf import csrf_exempt

# def index(request):
#     return render(request, 'habit_tracker/index.html')# {'logs': logs})


# def signup(request):
#     if request.method == 'POST':
#         form = CustomUserCreationForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             # Log the user in.
#             login(request, user)
#             return redirect('home')  # Redirect to a success page or homepage
#     else:
#         form = CustomUserCreationForm()
#     return render(request, 'registration/signup.html', {'form': form})


# def justjam(request):
#     return render(request, 'habit_tracker/justjam.html',)


# def add_routine(request):
#     submitted = False
    
#     if request.method == 'POST':
#         routine_form = RoutineForm(request.POST)
#         exercise_formset = ExerciseFormSet(request.POST, queryset=Exercise.objects.none(), )# initial=data)# prefix='exercise')
        
#         if routine_form.is_valid() and exercise_formset.is_valid():
#             routine = routine_form.save()
#             for i, exercise_form in enumerate(exercise_formset):
#                 if exercise_form.is_valid():
#                     exercise = exercise_form.save(commit=False)
#                     exercise.save()
#                     routine.exercises.add(exercise)
#                 else:
#                     print('HERE')
#                     print(exercise_form.errors)
#             return HttpResponseRedirect('/add_routine?submitted=True')
#         else:
#             print('OUTSIDE')
#             print(exercise_formset.errors)
#     else:
#         routine_form = RoutineForm()
#         exercise_formset = ExerciseFormSet(queryset=Exercise.objects.none(),)# prefix='exercise')
#         if 'submitted' in request.GET:
#             submitted = True

#     return render(request, 'habit_tracker/add_routine.html', {
#         'routine_form': routine_form, 
#         'exercise_formset': exercise_formset, 
#         'submitted': submitted,
#         'stripeOptions': textContent.get('stripeOptions', []),
#         })


# def editroutines(request):
#     routine_list = Routine.objects.all()
#     return render(request, 'habit_tracker/editroutines.html', {'routine_list': routine_list})


# def choose_routine(request):
#     routine_list = Routine.objects.all()
#     return render(request, 'habit_tracker/choose_routine.html', {'routine_list': routine_list})


# def chosen_routine(request, routine_id):
#     routine = get_object_or_404(Routine, id=routine_id)
#     return render(request, 'habit_tracker/chosen_routine.html', {'routine': routine})


# def play_routine(request, routine_id):
#     routine = get_object_or_404(Routine, id=routine_id)
#     return render(request, 'habit_tracker/play_routine.html', {'routine': routine})


