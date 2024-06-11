const createError = require("http-errors");
const Post = require('../modelos/post.model');

async function createPost(postData) {
  const newPost = await Post.create(postData);
  return newPost;
}

async function getAllPosts() {
  const allPosts = await Post.find().populate("user");
  return allPosts;
}

async function getPostByTitle(title) {
  const query = { title: { $regex: title, $options: "i" } };
  const getPostByTitle = await Post.findOne(query).populate("user");
  return getPostByTitle;
}

async function updatePostById(id, newData, user) {
  const post = await Post.findById(id);
  newData.user = post.user;
  newData.username = post.user;
  const updatePost = await Post.findByIdAndUpdate(id, newData, { new: true });
  return updatePost;
}

async function deleteById(idPost, idUserPost, idUserActive) {
  if (idUserPost!= idUserActive)
    throw createError(403, "The user isn't the creator of the post");
  
  const postDeleted = await Post.findByIdAndDelete(idPost);
  return postDeleted;
}

module.exports = {
  createPost,
  getAllPosts,
  getPostByTitle,
  updatePostById,
  deleteById,
};