from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Hack(models.Model):
    title = models.CharField(max_length=255)
    user = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField('Tag', related_name='hacks')


class Tag(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
