import React, { useEffect } from "react";
import { getAllArticles } from "../redux/actions/Article";
import { useDispatch, useSelector } from "react-redux";

import BlogCard from "../components/ArticleCard/BlogCard";

const Blog = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllArticles());
    }, [dispatch]);
    const articles = useSelector((state) => state.articleReducer.Articles);
    return (
        <div
            style={{
                padding: "80px 0",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#43283a",
            }}
        >
            {articles.map((item) => (
                <BlogCard key={item._id} item={item} />
            ))}
        </div>
    );
};

export default Blog;
