import react from '@vitejs/plugin-react';
import {defineConfig, type Connect} from 'vite';

// One HTML entry per URL: / (chooser), /rishabh/, /purva/.
// Each invite page picks its JSON via <html data-invite="...">.
const INVITES = ['rishabh', 'purva'];

// /rishabh -> /rishabh/ in dev + preview (static hosts like Netlify/Vercel/GitHub Pages do this themselves).
const addSlash: Connect.NextHandleFunction = (req, res, next) => {
  const [path, query] = (req.url ?? '').split('?');
  if (!INVITES.includes(path.slice(1))) return next();
  res.writeHead(301, {Location: `${path}/${query ? `?${query}` : ''}`}).end();
};

export default defineConfig({
  // GitHub Pages serves the site from /e-invite/; the workflow sets BASE_PATH. Dev stays at /.
  base: process.env.BASE_PATH ?? '/',
  appType: 'mpa',
  plugins: [
    react(),
    {
      name: 'invite-trailing-slash',
      configureServer: (s) => void s.middlewares.use(addSlash),
      configurePreviewServer: (s) => void s.middlewares.use(addSlash),
    },
  ],
  build: {
    rollupOptions: {
      input: ['index.html', ...INVITES.map((slug) => `${slug}/index.html`)],
    },
  },
});
