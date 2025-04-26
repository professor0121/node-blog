const { getHome, getNewForm, createPost, getSinglePost, serveStatic } = require('../controllers/postController');

module.exports = (req, res) => {
  if (req.url === '/' && req.method === 'GET') return getHome(req, res);
  if (req.url === '/new' && req.method === 'GET') return getNewForm(req, res);
  if (req.url === '/create' && req.method === 'POST') return createPost(req, res);
  if (req.url.startsWith('/post') && req.method === 'GET') return getSinglePost(req, res);
  if (req.url.startsWith('/public/')) return serveStatic(req, res);

  res.writeHead(404);
  return res.end('404 Not Found');
};
