# Generated by Django 4.2.4 on 2023-10-12 14:19

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("habit_tracker", "0007_remove_routine_exercise_routine_exercise"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="routine",
            name="exercise",
        ),
        migrations.AddField(
            model_name="routine",
            name="description",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="routine",
            name="exercise_name",
            field=models.CharField(default="Exercise", max_length=200),
        ),
        migrations.AddField(
            model_name="routine",
            name="link",
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name="routine",
            name="time",
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.DeleteModel(
            name="Exercise",
        ),
    ]
