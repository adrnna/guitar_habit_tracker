from django.db import models

class PracticeLog(models.Model):
    date = models.DateField(auto_now_add=True)
    minutes_practiced = models.PositiveIntegerField()
    notes = models.TextField(blank=True)


class Exercise(models.Model):

    # unit_type = models.Choices('1', '2', '3', '4')
    # routine = models.ForeignKey(Routine, on_delete=models.CASCADE) 
    exercise_name = models.CharField(max_length = 200)
    time = models.CharField(max_length=10, blank=False, null=False, default="5 min")
    description = models.TextField(blank = True)
    link = models.URLField(blank = True)
    exercise_type = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.exercise_name
    

class Routine(models.Model):
    routine_name = models.CharField(max_length=200, default='')
    exercises = models.ManyToManyField(Exercise, blank = True,)

    def __str__(self):
        return self.routine_name  


