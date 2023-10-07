from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.staticfiles import finders
from .forms import CustomUserCreationForm
from .models import PracticeLog, Routine
# from .models import Routine
# from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

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

def newroutine(request):
    return render(request, 'habit_tracker/newroutine.html',)

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
