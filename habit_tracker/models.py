from django.db import models

class PracticeLog(models.Model):
    date = models.DateField(auto_now_add=True)
    minutes_practiced = models.PositiveIntegerField()
    notes = models.TextField(blank=True)

class Routines(models.Model):
    name = models.CharField(max_length=100)
    time = models.PositiveIntegerField()