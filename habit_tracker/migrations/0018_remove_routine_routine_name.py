# Generated by Django 4.2.4 on 2023-10-27 16:52

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("habit_tracker", "0017_remove_routine_exercise"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="routine",
            name="routine_name",
        ),
    ]
