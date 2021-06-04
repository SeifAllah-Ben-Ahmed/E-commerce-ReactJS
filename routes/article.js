const express = require("express");
const {
    GetSingleArticle,
    GetArticles,
    AddArticle,
    UpdateArticle,
    DeleteArticle,
} = require("../controllers/article");
const { upload } = require("../middleware/uploadArticle");

const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

/*
@methode :get
@path: http://localhost:5000/api/article/
Private
*/
router.get("/", isAuth, GetArticles);
router.get("/:name", isAuth, GetSingleArticle);
router.post("/add", isAdmin, upload.single("article"), AddArticle);

router.put("/update/:title", isAdmin, upload.single("article"), UpdateArticle);
router.delete(
    "/delete/:title",
    isAdmin,
    upload.single("article"),
    DeleteArticle
);
module.exports = router;
