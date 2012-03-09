from django.conf.urls.defaults import patterns, include, url
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
#    url(r'^$', 'core.views.index', name='index'),
#    url(r'^spots/$', 'core.views.spots', name='spots'),
#    url(r'^spot/(?P<id>\d)/$', 'core.views.spot', name='spot'),
    # url(r'^toolsplanet/', include('toolsplanet.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    (r'^comments/', include('django.contrib.comments.urls')),

#    (r'^admin/gmapsfield/admin/(?P<file>.*)$', 'gmapsfield.views.serve'),
    (r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT, 'show_indexes':True}),

    url(r'^', include('core.urls')),
)
