self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('install', (event) => {

});

self.addEventListener('fetch', (event) => {
  if (!/\/auth\/(signup|restore)/.test(event.request.url)) {
    return;
  }
  event.respondWith(
    (async () => {
      const reponse = await fetch(event.request.clone());
      if (!event.clientId) return reponse;

      const client = await self.clients.get(event.clientId);
      if (!client) return reponse;

      const token = (await reponse.clone().json()).token;

      client.postMessage(token);

      return reponse;
    })(),
  );
});