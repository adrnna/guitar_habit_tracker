# backend urls.py: This file should define the URL patterns for the API endpoints. 
# It should also configure static file serving for the backend app.

from django.conf import settings
from django.urls import include, path
from . import views
# from .views import save_data
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('api/routines/', views.RoutineView.as_view(), name='routines'),
    # path('api/routines/', views.routine, name='routines'),
    path('api/exercises/', views.ExerciseView.as_view(), name='exercises'),
    path('api/current_user/', views.get_user, name='get_user'),
    # include frontend urls last - order matters
    path('', include('frontend.urls')),

    # path('', views.index, name='home'),
    # path('signup/', views.signup, name='signup'),
    # path('accounts/login/', auth_views.LoginView.as_view(), name='login'),
    # path('accounts/logout/', auth_views.LogoutView.as_view(), name='logout'),
    # path('justjam/', views.justjam, name='justjam'),
    # path('add_routine/', views.add_routine, name='add_routine'),
    # path('editroutines/', views.editroutines, name='editroutines'),
    # path('choose_routine/', views.choose_routine, name='choose_routine'),
    # path('chosen_routine/<int:routine_id>/', views.chosen_routine, name='chosen_routine'),
    # path('play_routine/<int:routine_id>/', views.play_routine, name='play_routine'),
]

# if settings.DEBUG:
#     urlpatterns += path("__debug__/", include("debug_toolbar.urls", namespace="debug_toolbar")),