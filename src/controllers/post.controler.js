const postService = require('../services/post.service');

const addPost = async (req, res) => {
    const addingPost = await postService.addPost(req.body);

    if (addingPost.type) {
        return res.status(400).json({ message: addingPost.message });
    }

    res.status(201).json(addingPost.message);
};

module.exports = {
    addPost,
};