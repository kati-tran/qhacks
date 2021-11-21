from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from backend.models import Post
from backend.serializers import PostSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def post_list(request):
	# GET list of posts, POST a new post, DELETE all posts
	if request.method == 'GET':
		posts = Post.objects.all().order_by('-createDate')

		title = request.GET.get('title', None)

		userid = request.GET.get("user_id", None)

		type = request.GET.get("type", None)

		if title is not None:
			posts = posts.filter(title__icontains=title)
		
		if userid is not None:
			posts = posts.filter(user_id=userid)

		if type is not None:
			posts = posts.filter(type=type)

		
		posts_serializer = PostSerializer(posts, many=True)
		 # 'safe=False' for objects serialization
		return JsonResponse(posts_serializer.data, safe=False)

	elif request.method == 'DELETE':
		count = Post.objects.all().delete()
		return JsonResponse({'message': '{} Posts were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

	elif request.method == 'POST':
		post_data = JSONParser().parse(request)
		post_serializer = PostSerializer(data=post_data)
		if post_serializer.is_valid():
			post_serializer.save()
			return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED)
		return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def post_detail(request, pk):
	# find post by pk (id)
	try:
		post = Post.objects.get(pk=pk)
		if request.method == 'GET':
			post_serializer = PostSerializer(post)
			return JsonResponse(post_serializer.data)
		elif request.method == 'PUT': 
			post_data = JSONParser().parse(request) 
			post_serializer = PostSerializer(post, data=post_data) 
			if post_serializer.is_valid(): 
				post_serializer.save() 
				return JsonResponse(post_serializer.data) 
			return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
		elif request.method == 'DELETE': 
			post.delete() 
			return JsonResponse({'message': 'Post was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
	except Post.DoesNotExist: 
		return JsonResponse({'message': 'The post does not exist'}, status=status.HTTP_404_NOT_FOUND) 
	# GET / PUT / DELETE post


