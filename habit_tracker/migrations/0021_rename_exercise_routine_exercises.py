# Generated by Django 4.2.4 on 2023-10-30 08:50

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("habit_tracker", "0020_alter_routine_exercise"),
    ]

    operations = [
        migrations.RenameField(
            model_name="routine",
            old_name="exercise",
            new_name="exercises",
        ),
    ]
