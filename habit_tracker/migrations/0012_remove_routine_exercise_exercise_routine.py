# Generated by Django 4.2.4 on 2023-10-27 14:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("habit_tracker", "0011_rename_name_exercise_exercise_name"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="routine",
            name="exercise",
        ),
        migrations.AddField(
            model_name="exercise",
            name="routine",
            field=models.ForeignKey(
                default="",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="exercises",
                to="habit_tracker.routine",
            ),
        ),
    ]