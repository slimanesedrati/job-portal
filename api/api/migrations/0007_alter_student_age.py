# Generated by Django 4.1.7 on 2023-05-13 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_application_status_alter_offer_offer_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='age',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]