from django.db import models

class PracticeLog(models.Model):
    date = models.DateField(auto_now_add=True)
    minutes_practiced = models.PositiveIntegerField()
    notes = models.TextField(blank=True)

# stripe_options = textContent.stripeOptions

class Exercise(models.Model):
    # unit_type = models.Choices('1', '2', '3', '4')
    name = models.CharField(max_length = 200)
    time = models.PositiveIntegerField()
    description = models.TextField(blank = True)
    link = models.URLField(blank = True)

    def __str__(self):
        return self.name

class Routine(models.Model):
    routine_name = models.CharField(max_length=200, default='Routine')
    exercise = models.ManyToManyField(Exercise, blank = True, null = True,)

    def __str__(self):
        return self.routine_name

