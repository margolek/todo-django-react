from django.urls import path
from .import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name='tasks_api'

urlpatterns= [
    path('tasks', views.task_list,name='task_list'),
    path('task/<int:pk>/', views.task_detail,name='task_detail')
]

urlpatterns = format_suffix_patterns(urlpatterns)