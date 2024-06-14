from django.db import models

# Create your models here.
class Greencap(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    goal = models.TextField()
    methodology = models.TextField()
    picture = models.ImageField(default="foobar")
    contact = models.TextField()
    lon = models.FloatField(default=0.0)
    lat = models.FloatField(default=0.0)
    date = models.DateField()

    def _str_(self):
        return self.title