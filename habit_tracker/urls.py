from django.conf import settings
from django.urls import include, path
from . import views
# from .views import save_data
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.index, name='home'),
    path('signup/', views.signup, name='signup'),
    path('accounts/login/', auth_views.LoginView.as_view(), name='login'),
    path('accounts/logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('justjam/', views.justjam, name='justjam'),
    path('add_routine/', views.add_routine, name='add_routine'),
    path('editroutines/', views.editroutines, name='editroutines'),
    path('choose_routine/', views.choose_routine, name='choose_routine'),
    # path('api/save_data/', save_data, name='save_data'),
]

if settings.DEBUG:
    urlpatterns += path("__debug__/", include("debug_toolbar.urls", namespace="debug_toolbar")),