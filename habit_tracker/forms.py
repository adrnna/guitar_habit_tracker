from django import forms
from django.forms import ModelForm
from .models import Routine, Exercise
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .data import textContent

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data["email"]
        if commit:
            user.save()
        return user

class ExerciseForm(ModelForm):
    class Meta:
        model = Exercise
        fields = ('name', 'time', 'description', 'link')

class RoutineForm(ModelForm):
    class Meta:
        model = Routine
        fields = ('routine_name',)#, 'exercise',)
    
    routine_name = forms.CharField(label='Routine Name', required=True,
        widget=forms.TextInput(attrs={'class': 'input-box name', 'type': 'text', 'onclick': 'changeColor(this)', 'id': 'inputValue', 'placeholder': textContent['inputRoutineNamePlaceholder'] })
    )