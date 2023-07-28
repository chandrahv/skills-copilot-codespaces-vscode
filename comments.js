//Create web servers
const express = require('express');
const router = express.Router();
//Import model
const CommentModel = require('../models/comment');
//Import model
const PostModel = require('../models/post');

//Create a comment
router.post('/', function (req, res) {
    //Create a new comment
    let comment = new CommentModel({
        postId: req.body.postId,

