from rest_framework import serializers 
from backend.models import Post
 
 
class PostSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Post
        fields = ('id',
                  'title',
                  'description',
                  'pay_email',
                  'user_id',
                  'published',
                  'type',
                  'createDate')