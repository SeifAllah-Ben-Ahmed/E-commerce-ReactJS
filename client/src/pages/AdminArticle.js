import React, { useEffect } from "react";
import ArticleAdmin from "../components/Admin/ArticleAdmin";
import AddArticle from "../components/Admin/AddArticle";
import { getAllArticles } from "../redux/actions/Article";
import { useDispatch, useSelector } from "react-redux";

const AdminArticle = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllArticles());
    }, [dispatch]);

    const Article = useSelector((state) => state.articleReducer.Articles);
    return (
        <div
            style={{
                padding: "80px 0",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#43283a",
                minHeight: "100vh",
            }}
        >
            <AddArticle />
            {Article &&
                Article.map((item) => (
                    <ArticleAdmin key={item._id} item={item} />
                ))}
        </div>
    );
};

export default AdminArticle;
