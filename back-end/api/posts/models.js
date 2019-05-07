const mongoose = require('mongoose');
//title
//content
//image
const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    isPublic: Boolean,
    createAt: {
        type: Date,
        default: new Date(),
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    }
});

const PostModel = mongoose.model('Post',PostSchema);

module.exports = PostModel;