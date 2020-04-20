const express = require('express');
const connection = require('./database/connection');
const crypto = require('crypto');
const routes = express.Router();

routes.get('/posts', async (req, res) => {
  const posts = await connection('posts').select('*');

  return res.json(posts);
});

routes.post('/posts', async (req, res) => {
  const { username, avatar, location, picture, legend } = req.body;
  const id = crypto.randomBytes(8).toString('HEX');
  
  await connection('posts').insert({
    id,
    username,
    location,
    avatar,
    legend,
    picture
  });

  return res.json({ id });
});

module.exports = routes;