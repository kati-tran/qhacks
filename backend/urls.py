from django.conf.urls import url 
from backend import views 
 
urlpatterns = [ 
    url(r'^api/post$', views.post_list),
    url(r'^api/post/(?P<pk>[0-9]+)$', views.post_detail)
]