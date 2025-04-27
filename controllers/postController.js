const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const Post = require('../models/postModel');
const render = require('../utils/templateEngine');

exports.getHome = (req, res) => {
  const posts = Post.getAll();
  const list = posts.map(p => `<li><a href="/post?id=${p.id}">${p.title}</a></li>`).join('');
  const html = render('home.html', { posts: list });
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
};

exports.getNewForm = (req, res) => {
  const html = render('new.html');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
};

exports.createPost = (req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const { title, content } = querystring.parse(body);
    Post.save({ title, content });
    res.writeHead(302, { Location: '/' });
    res.end();
  });
};

  exports.getSinglePost = (req, res) => {
    const id = new URL(req.url, `http://${req.headers.host}`).searchParams.get('id');
    const post = Post.findById(id);
    if (post) {
      const html = render('post.html', post);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      res.writeHead(404);
      res.end('Post not found');
    }
  };

exports.serveStatic = (req, res) => {
  const filePath = path.join(__dirname, '..', req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404); res.end('File not found');
    } else {
      res.writeHead(200); res.end(data);
    }
  });
};

exports.getAllPosts = (req, res) => {
  const posts = Post.getAll();

  const list = posts
    .map(p => `<li class="text-blue-600 hover:underline"><a href="/post?id=${p.id}">${p.title}</a></li>`)
    .join('');

  const html = render('archive.html', { posts: list });

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
};