# Generated by Django 4.2.4 on 2023-10-03 16:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("habit_tracker", "0006_exercise_remove_routine_description_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="routine",
            name="exercise",
        ),
        migrations.AddField(
            model_name="routine",
            name="exercise",
            field=models.ManyToManyField(
                blank=True, null=True, to="habit_tracker.exercise"
            ),
        ),
    ]
