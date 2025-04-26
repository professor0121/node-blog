const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/posts.json');

function getAll() {
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
}

function save(post) {
  const posts = getAll();
  post.id = Date.now().toString();
  posts.push(post);
  fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));
}

function findById(id) {
  return getAll().find(p => p.id === id);
}

module.exports = { getAll, save, findById };
