const { getAllPosts } = require('../services/postService');

const getAllPostss = async (_req, res) => {
  try {
    const posts = await getAllPosts();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPostss,
};