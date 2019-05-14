# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from mi_tienda.models import Album

# Create your views here.

def home_view (request):
    p1 = Album.objects.get(name='WISH YOU WERE HERE')
    return render(request, 'tienda.html', {'product':p1.name, 'price':p1.price})
