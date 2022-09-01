const { Schema, model } = require("mongoose");
const Article = new Schema({
    id: String, //ArticleID
    slug: String,//url-friendly id
    title: String, //ArticleName
    author: String,
    img: String,//img location url
    body: String,//ArticleBody
    date: {
        type: Date,
        default: Date.now
    }
});
const Articles = new model("Article",Article);
module.exports = Articles;