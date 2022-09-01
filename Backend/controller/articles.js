const ArticleDB = require('../db/models/article');
const shortid = require("shortid");
const {isStr,upload} = require('../customs/customs');
const { default: slugify } = require('slugify');
const sanitize = require('sanitize-html');

async function articles(req,res) {
    try {
        console.log('aaya');
        const foundArticles = await ArticleDB.find().select('-body -_id -__v');
        return res.json({status:200,body:foundArticles});
    } catch(err) {
        return res.json({status:500,msg:err.message || err || "Something bad happened! Contact Developer."});
    }
}
async function article(req,res) {
    try {
        console.log('aaya');
        const {slug} = req.params;
        const foundArticle = await ArticleDB.findOne({slug:slug}).select('-_id -__v');
        if(!foundArticle) return res.json({status:404,msg:'We couldn\t found your article!'});
        return res.json({status:200,body:foundArticle});
    } catch(err) {
        return res.json({status:500,msg:err.message || err || "Something bad happened! Contact Developer."});
    }
}
async function new_article(req,res) {
    try {
        const {title,author,body} = req.body;
        if(!isStr(title,'min-max',30,100)) return res.json({status:400,msg:'Title=> Min:30 chars & Max:100 chars'});
        if(author.length && !isStr(author,'min-max',1,6)) return res.json({status:400,msg:'Author=> Max:6 chars'});
        if(!isStr(body,'min',1)) return res.json({status:400,msg:'Body=> Don\'t leave it blank!'});
        const article_id = shortid.generate();
        const article = new ArticleDB({
            id: article_id,
            slug: slugify(title,{lower:true}) + '-' + shortid.generate(),
            title: title,
            author: author,
            img: '',
            body: body,
        });
        // Normaly we sanitize html with:- sanitize(body)
        await upload(article_id,req.files.img.mimetype,req.files.img.data);
        article.img = `/article_imgs/${article_id}.webp`;
        await article.save();
        return res.json({status:201,msg:'Congrats! Your newly created article is sucessfully published.'});
    } catch(err) {
        return res.json({status:500,msg:err.message || err || "Something bad happened! Contact Developer."});
    }
}

module.exports = {articles,article,new_article};