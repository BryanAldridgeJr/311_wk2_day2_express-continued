const comments = require('../data/comments');

const commentsController = {
    list: (req , res) => {
        res.json(comments);
    },
    show: (req, res) => {
        const comment = comments.find(comment => comment._id == req.params.id);
        res.status(200).json(comment);
    },
    create: (req, res) => {
        const newComment = {
            ...req.body,
            _id: comments.length + 1
        };
    
        comments.push(newComment);
        res.json(newComment);
    },
}

module.exports = commentsController; 