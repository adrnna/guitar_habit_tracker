from django import forms
from django.forms import ModelForm, modelformset_factory
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
    # def __init__(self, *args,**kwargs):
    #     super(ExerciseForm, self).__init__(*args, **kwargs)
    #     # Generate a unique ID based on the form's index
    #     form_index = self.prefix or 0
    #     self.fields['exercise_name'].widget.attrs.update({
    #         'id': f'exercise_name_{form_index}'
    #     })

    class Meta:
        model = Exercise
        fields = ('exercise_name', 'time', 'description', 'link')

    exercise_name = forms.CharField(
        label='Exercise Name', 
        widget=forms.TextInput(attrs={
            'class': 'input-box name',
            'type': 'text', 
            'onclick': 'changeColor(this)', 
            'placeholder': textContent['inputPlaceholder'],
            'required': 'required'
        })
    )


    TIME_CHOICES = [
    ("5", "5"),
    ("10", "10"),
    ("15", "15"),
    ("20", "20"),
    ("30", "30"),
    ("45", "45"),
    ("60", "60"),
    ]

    time = forms.ChoiceField(
        label='Time',
        widget=forms.RadioSelect,
        choices=TIME_CHOICES,
        required=False,
    )

    description = forms.CharField(
        label='Description', 
        required=False,
        widget=forms.Textarea(attrs={
            'class': 'input-box description',
            'type': 'text',
            'data-autoresize': 'true',
            'oninput': "addAutoResize(this)",
            'onfocus': 'changeColor(this)',
            'rows': '2', 
            'placeholder': textContent['addDescription'],
        })
    )
    link = forms.URLField(
        label='Link', 
        required=False,
        widget=forms.TextInput(attrs={
            'class': 'input-box link', 
            # 'type': 'url', 
            'placeholder': textContent['addLink'],
            'onfocus': 'changeColor(this)', 
        })
    )

ExerciseFormSet = modelformset_factory(Exercise, form=ExerciseForm, extra=4)


class RoutineForm(ModelForm):
    class Meta:
        model = Routine
        fields = ('routine_name', 'exercises',)
    
    routine_name = forms.CharField(
        label='Routine Name', 
        widget=forms.TextInput(attrs={
            'class': 'input-box name', 
            'type': 'text', 
            'onclick': 'changeColor(this)', 
            'id': 'routine_name', 
            'placeholder': textContent['inputRoutineNamePlaceholder'],
            'required': 'required'
        })
    )
