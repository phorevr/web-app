const CACHE_TOKEN_ENDPOINT = '/cache/token';

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const { request, request: { url, method } } = event;
  if (!url.match(CACHE_TOKEN_ENDPOINT)) {
    return event;
  }
  const dummyResponse = new Response('{}', { headers: { 'content-type': 'application/json' } });
  if (method === 'POST') {
    request.json().then(body => {
      caches.open(CACHE_TOKEN_ENDPOINT).then(function (cache) {
        cache.put(
          CACHE_TOKEN_ENDPOINT,
          new Response(JSON.stringify(body), {
            headers: { 'content-type': 'application/json' }
          }),
        );
      });
    });
    return dummyResponse;
  } else {
    event.respondWith(
      caches.open(CACHE_TOKEN_ENDPOINT).then(function (cache) {
        return cache.match(CACHE_TOKEN_ENDPOINT).then(function (response) {
          return response || dummyResponse;
        }) || dummyResponse;
      })
    );
  }
});

importScripts('flutter_service_worker.js');