import React, { useEffect } from "react";
import { getAllArticles } from "../redux/actions/Article";
import { useDispatch, useSelector } from "react-redux";

import BlogCard from "../components/ArticleCard/BlogCard";
import { current } from "../redux/actions/User";

const Blog = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
        dispatch(getAllArticles());
    }, [dispatch]);
    const articles = useSelector((state) => state.articleReducer.Articles);
    return (
        <div
            style={{
                padding: "80px 20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "#43283a",
                width: "100%",
            }}
        >
            {articles.map((item) => (
                <BlogCard key={item._id} item={item} />
            ))}
        </div>
    );
};

export default Blog;
