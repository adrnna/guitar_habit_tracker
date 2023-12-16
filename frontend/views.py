#frontend views.py: This file should contain the React components that render the user interface for the frontend app.

from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponseRedirect
from habit_tracker.models import PracticeLog, Routine, Exercise
from habit_tracker.forms import RoutineForm, ExerciseFormSet
from .data import textContent
# from habit_tracker.forms import CustomUserCreationForm
# from django.contrib.auth import login


def index(request):
    return render(request, 'frontend/habit_tracker/index.html')




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
#     return render(request, 'frontend/registration/signup.html', {'form': form})


# def justjam(request):
#     return render(request, 'frontend/habit_tracker/justjam.html',)


# def add_routine(request):
#     submitted = False
    
#     if request.method == 'POST':
#         routine_form = RoutineForm(request.POST)
#         exercise_formset = ExerciseFormSet(request.POST, queryset=Exercise.objects.none(),)# initial="ARPEGGIO")# prefix='exercise')
        
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
#         initial_exercise_types = textContent.get('stripeOptions', [])
#         # Create the ExerciseFormSet with initial values
#         exercise_formset = ExerciseFormSet(
#             queryset=Exercise.objects.none(),
#             initial=[{'exercise_type': type} for type in initial_exercise_types]
#             )
#         if 'submitted' in request.GET:
#             submitted = True

#     return render(request, 'frontend/habit_tracker/add_routine.html', {
#         'routine_form': routine_form, 
#         'exercise_formset': exercise_formset, 
#         'submitted': submitted,
#         'stripeOptions': textContent.get('stripeOptions', []),
#         })


# def editroutines(request):
#     routine_list = Routine.objects.all()
#     return render(request, 'frontend/habit_tracker/editroutines.html', {'routine_list': routine_list})


# def choose_routine(request):
#     routine_list = Routine.objects.all()
#     return render(request, 'frontend/habit_tracker/choose_routine.html', {'routine_list': routine_list})


# def chosen_routine(request, routine_id):
#     routine = get_object_or_404(Routine, id=routine_id)
#     return render(request, 'frontend/habit_tracker/chosen_routine.html', {'routine': routine})


# def play_routine(request, routine_id):
#     routine = get_object_or_404(Routine, id=routine_id)
#     return render(request, 'frontend/habit_tracker/play_routine.html', {'routine': routine})


