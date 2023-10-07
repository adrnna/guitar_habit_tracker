from django.urls import path
from . import views
# from .views import save_data
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.index, name='home'),
    path('signup/', views.signup, name='signup'),
    path('accounts/login/', auth_views.LoginView.as_view(), name='login'),
    path('accounts/logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('justjam/', views.justjam, name='justjam'),
    path('newroutine/', views.newroutine, name='newroutine'),
    path('editroutines/', views.editroutines, name='editroutines'),
    # path('api/save_data/', save_data, name='save_data'),
]
