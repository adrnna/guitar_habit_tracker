# Generated by Django 4.2.4 on 2023-10-27 16:25

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("habit_tracker", "0015_remove_exercise_routine"),
    ]

    operations = [
        migrations.AddField(
            model_name="routine",
            name="exercise",
            field=models.ManyToManyField(
                blank=True, null=True, to="habit_tracker.exercise"
            ),
        ),
    ]
