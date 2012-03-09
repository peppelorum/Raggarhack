# Create your views here.

from django.shortcuts import render_to_response
from django.template import RequestContext

from models import Hack, Tag


def start(request):



    dict = {
        'hacks': Hack.objects.all().order_by('created_at')[:5]

    }

    return render_to_response('start.html', dict, context_instance=RequestContext(request))