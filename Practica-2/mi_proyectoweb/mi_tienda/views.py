# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from mi_tienda.models import Album

# Create your views here.

def home_view (request):
    albums = Album.objects.all()
    return render(request, 'tienda.html', {'albums': albums})

def search_try (request):
    if request.method == 'GET':
        search_query = request.GET.get('search-box', None)


    return render(request, 'search.html', {})

def album_view (request, album_name):
    
    return render(request, 'album_page.html', {})
