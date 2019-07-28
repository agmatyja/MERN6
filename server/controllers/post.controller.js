const Post = require('../models/post.model');

// get all posts

exports.getPosts = async (req, res) => {

    try {
      res.status(200).json(await Post.find());
    } catch(err) {
      res.status(500).json(err);
    }

};

//get single post

exports.getPost = async (req, res) => {

    try {
      const postArr = await Post.find({ id: { $eq: req.params.id} })
      if (postArr.length === 1) {
		res.status(200).json(postArr[0]);
	  } else {
		res.status(404).json({});
	  }
    } catch(err) {
      res.status(500).json(err);
    }

};

// add new post
exports.addPost = async function (req, res) {

  try {
    const { title, author, content } = req.body;

    let newPost = new Post(req.body);
	const uuid = require('uuid');
    newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);

  } catch(err) {
    res.status(500).json(err);
  }

}

// get posts by range
exports.getPostsByRange = async function (req, res) {

  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);
   
    const posts = await Post.find().skip(startAt).limit(limit);
    const amount = await Post.countDocuments();

    res.status(200).json({
      posts,
      amount,
    });   

  } catch(err) {
    res.status(500).json(err);
  }

};