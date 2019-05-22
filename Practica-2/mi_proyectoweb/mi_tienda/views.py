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
        results = (Album.objects.filter(name__icontains=search_query) |
                    Album.objects.filter(author__icontains=search_query))
    return render(request, 'search.html', {'results':results})

def album_view (request, album_name):
    arrayWords = album_name.split("_")
    album_name = ""
    # We must format our album name first
    for word in arrayWords:
        if album_name == "":
            album_name = word
        else:
            album_name = album_name + ' ' + word

    album = Album.objects.get(name=album_name)
    print(album.price)
    return render(request, 'album_page.html', {'album': album})
