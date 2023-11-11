from django.contrib import admin
from .models import PracticeLog, Routine, Exercise
# from .forms import RoutineForm, ExerciseForm
from django.forms.models import inlineformset_factory

admin.site.register(PracticeLog)
admin.site.register(Routine)
admin.site.register(Exercise)

# class ExerciseInline(admin.TabularInline):
#     # model = Exercise
#     model = Routine.exercise.through


# class RoutineAdmin(admin.ModelAdmin):
#     inlines = [ExerciseInline]

# admin.site.register(Routine, RoutineAdmin)
# admin.site.register(Exercise)