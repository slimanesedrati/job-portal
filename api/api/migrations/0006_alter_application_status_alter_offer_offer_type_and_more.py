# Generated by Django 4.2 on 2023-05-12 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_application_status_alter_offer_offer_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='status',
            field=models.CharField(choices=[('1', 'Pending'), ('2', 'Accepted'), ('3', 'Rejected')], default='1', max_length=1),
        ),
        migrations.AlterField(
            model_name='offer',
            name='offer_type',
            field=models.CharField(choices=[('1', 'Intership'), ('2', 'Job')], default='1', max_length=1),
        ),
        migrations.AlterField(
            model_name='student',
            name='gender',
            field=models.CharField(blank=True, choices=[('1', 'Male'), ('2', 'female')], default='1', max_length=1),
        ),
    ]
