# Generated by Django 3.2.9 on 2022-02-11 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_first_time_login'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='sex_preference',
        ),
        migrations.AddField(
            model_name='user',
            name='sex_preference',
            field=models.ManyToManyField(blank=True, null=True, to='users.SexPreference'),
        ),
    ]
