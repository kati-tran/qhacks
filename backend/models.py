from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    pay_email = models.CharField(max_length=70, blank=False, default='')
    createDate = models.DateTimeField(default=None, blank=True, null=True)
    user_id = models.IntegerField()
    published = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} - {self.description[:30]}...\t\t\t{self.createDate}"