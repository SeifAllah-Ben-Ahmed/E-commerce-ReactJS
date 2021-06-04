const Article = require("../models/Article");

exports.GetArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        if (articles.length === 0) {
            return res
                .status(404)
                .send({ errors: [{ msg: "Articles not found" }] });
        }
        res.status(200).send({ msg: "Articles found", articles });
    } catch (error) {
        res.status(404).send({ errors: [{ msg: "Articles not found" }] });
    }
};
exports.GetSingleArticle = async (req, res) => {
    try {
        const article = await Article.findOne({ title: req.params.name });
        if (!article) {
            return res
                .status(404)
                .send({ errors: [{ msg: "Article not found" }] });
        }
        res.status(200).send({ msg: "Article found", article });
    } catch (error) {
        res.status(404).send({ errors: [{ msg: "Article not found" }] });
    }
};

exports.AddArticle = async (req, res) => {
    const { title, content, contentPlus, type } = req.body;
    try {
        //check if Article exist
        const findArticle = await Article.findOne({ title });

        if (findArticle) {
            res.status(400).send({
                errors: [
                    { msg: "Article already exsit, title should be unique" },
                ],
            });
        }
        // create new article
        const newArticle = await new Article({
            title,
            type,
            content,
            contentPlus,
            image: req.file,
        });
        //save article
        await newArticle.save();
        res.status(201).send({ msg: "Article is saved", Article: newArticle });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "article not saved" }] });
    }
};

exports.UpdateArticle = async (req, res) => {
    try {
        //find Article
        const findArticle = await Article.findOne({ title: req.params.title });
        if (!findArticle) {
            return res.status(404).send({
                errors: [{ msg: "Article not found" }],
            });
        }
        // check if the new name exist
        const existArticle = await Article.findOne({ title: req.body.title });
        if (existArticle) {
            if (existArticle.name !== findArticle.name) {
                return res.status(404).send({
                    errors: [{ msg: "Article title already exist" }],
                });
            }
        }
        //update Article

        const img = { image: req.file ? req.file : findProduct.image };
        const updateArticle = await Article.updateOne(
            { title: req.params.title },
            {
                $set: {
                    ...req.body,
                    image: img.image,
                },
            }
        );
        res.status(200).send({
            msg: "Article Updated successfully",
            Article: updateArticle,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "Can Not Update Article" }] });
    }
};
exports.DeleteArticle = async (req, res) => {
    try {
        const findArticle = await Article.findOne({ title: req.params.title });
        if (!findArticle) {
            return res.status(404).send({
                errors: [{ msg: "Article not found" }],
            });
        }
        const deleteArticle = await Article.deleteOne({
            _id: findArticle._id,
        });
        res.status(200).send({
            msg: "Article Deleted Successfuly",
            deleteArticle,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "Can Not Delete Article" }] });
    }
};
