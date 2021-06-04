const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    image: {
        type: Object,
        required: true,
    },
    content: {
        type: String,
        require: true,
    },
    contentPlus: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Article", articleSchema);
