from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Task(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modify_at = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    priority = models.IntegerField(validators=[MinValueValidator(1,'Value must be between 0 and 10'),
                                               MaxValueValidator(10,'Value must be between 0 and 10')])

    def __str__(self):
        return self.name
