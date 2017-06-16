const CACHE_NAME = 'my-cache-v1'
var urlsToCache = [
  'offline.html',
  'index.html'
];

self.addEventListener('install', function(event) {
	console.log("service worker installing");
	event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
	
});

	
});

self.addEventListener('fetch', function(event) {
  console.log('fetch');
});