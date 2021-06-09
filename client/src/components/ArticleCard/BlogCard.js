import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
    return (
        <article
            style={{
                textAlign: "center",
                width: "27%",
            }}
        >
            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: "#fff",
                }}
            >
                <figure
                    style={{
                        width: " 100%",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <img
                        height="450px"
                        src={`./blog/${item.image.filename}`}
                        alt="image2"
                    />
                    <figcaption>
                        <h3
                            style={{
                                textDecoration: "none",
                                color: "#43283a",
                                padding: "0 2.0833333333333335vw",
                                fontSize: "2.4vw",
                                marginTop: "1vw",
                            }}
                        >
                            {item.title}
                        </h3>
                    </figcaption>
                </figure>
            </Link>
        </article>
    );
};

export default BlogCard;
