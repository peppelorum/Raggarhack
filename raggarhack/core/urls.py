from django.conf.urls.defaults import patterns, include, url

urlpatterns = patterns('',
    # Examples:
        url(r'^$', 'core.views.start', name='start'),
    #    url(r'^spots/$', 'core.views.spots', name='spots'),
    #    url(r'^spot/(?P<id>\d)/$', 'core.views.spot', name='spot'),
)
