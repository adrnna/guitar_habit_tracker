from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.staticfiles import finders
from django.http import HttpResponseRedirect
from .forms import CustomUserCreationForm
from .models import PracticeLog, Routine
from .forms import RoutineForm, ExerciseForm
from django.forms import formset_factory
# from django.views.decorators.csrf import csrf_exempt

def index(request):
    return render(request, 'habit_tracker/index.html')# {'logs': logs})


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
    return render(request, 'registration/signup.html', {'form': form})


def justjam(request):
    return render(request, 'habit_tracker/justjam.html',)


def add_routine(request):
    submitted = False
    ExerciseFormSet = formset_factory(ExerciseForm, max_num=5)
    if request.method == 'POST':
        routine_form = RoutineForm(request.POST)
        exercise_formset = ExerciseFormSet(request.POST, prefix='exercise')
        if routine_form.is_valid() and exercise_formset.is_valid():
            # Save the routine
            routine = routine_form.save()
            # Save each exercise and associate it with the routine
            for exercise_form in exercise_formset:
                exercise = exercise_form.save(commit=False)
                exercise.save()
                routine.exercise.add(exercise)
            return HttpResponseRedirect('/add_routine?submitted=True')
    else:
        routine_form = RoutineForm()
        exercise_formset = ExerciseFormSet(prefix='exercise')
        # if 'submitted' in request.GET:
            # submitted = True
    return render(request, 'habit_tracker/add_routine.html',  {'routine_form': routine_form, 'exercise_formset': exercise_formset, 'submitted': submitted})


def editroutines(request):
    routine_list = Routine.objects.all()
    return render(request, 'habit_tracker/editroutines.html', {'routine_list': routine_list})

# @csrf_exempt  # Disable CSRF protection for this example (not recommended for production)
# def save_data(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         name = data.get('name')
#         time = data.get('time')
        
#         # Create and save a new Routine object
#         new_routine = Routine(name=name, time=time)
#         new_routine.save()

#         return JsonResponse({'success': True})
#     else:
#         return JsonResponse({'success': False, 'error': 'Invalid request method'})
