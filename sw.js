// Service worker mínimo do Ative — só existe para permitir "Instalar app" / "Adicionar à tela inicial"
// com o ícone correto. Não faz cache agressivo: sempre busca a rede primeiro.
const CACHE_NAME = 'ative-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
