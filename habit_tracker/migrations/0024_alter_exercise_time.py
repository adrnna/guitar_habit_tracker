# Generated by Django 4.2.4 on 2023-11-06 20:53

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("habit_tracker", "0023_alter_exercise_time"),
    ]

    operations = [
        migrations.AlterField(
            model_name="exercise",
            name="time",
            field=models.CharField(
                blank=True,
                choices=[
                    ("5 min", "5 min"),
                    ("10 min", "10 min"),
                    ("15 min", "15 min"),
                    ("20 min", "20 min"),
                    ("30 min", "30 min"),
                    ("45 min", "45 min"),
                    ("1h", "1h"),
                ],
                max_length=10,
                null=True,
            ),
        ),
    ]
