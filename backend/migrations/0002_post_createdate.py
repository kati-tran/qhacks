# Generated by Django 3.2.9 on 2021-11-21 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='createDate',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
    ]
