import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://your-ghost-url.com',
  key: 'YOUR_CONTENT_API_KEY',
  version: 'v5.0',
});

export default api;
