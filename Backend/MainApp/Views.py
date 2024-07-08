from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Condidate, Job
from .serializers import CondidateSerializer, JobSerializer

class CondidateViewSet(viewsets.ModelViewSet):
    queryset = Condidate.objects.all()
    serializer_class = CondidateSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['title', 'age', 'status']
    search_fields = ['title', 'age', 'status',]
    ordering_fields = ['title', 'age','status']

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['title','employer', 'location']
    search_fields = ['title','employer', 'location']
    ordering_fields = ['title','employer', 'location']
