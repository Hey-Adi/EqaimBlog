const express = require('express');
const router = express.Router();
const {articles,article,new_article} = require('../controller/articles');

router
    .get('/',articles)
    .get('/:slug',article)
    .post('/new_article',new_article)
;

module.exports = router;