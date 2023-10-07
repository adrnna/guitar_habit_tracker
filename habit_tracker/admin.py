from django.contrib import admin
from .models import PracticeLog
from .models import Routine
from .models import Exercise

admin.site.register(PracticeLog)
admin.site.register(Routine)
admin.site.register(Exercise)

