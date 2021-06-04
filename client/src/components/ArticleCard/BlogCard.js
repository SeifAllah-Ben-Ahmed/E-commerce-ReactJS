import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
    return (
        <div
            style={{
                padding: "6.944444444444445vw ",
                height: "100%",
                width: "100%",

                backgroundColor: "#f8f7f3",
            }}
        >
            <article
                style={{
                    textAlign: "center",
                    width: "27%",
                    marginRight: "4%",
                    position: "absolute",
                    left: "0%",
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
                            <p
                                style={{
                                    color: "#43283a",
                                    padding: "0 4.166666666666667vw",
                                    fontSize: "1.25vw",
                                    marginTop: " 0.6944444444444444vw",
                                }}
                            >
                                {item.content}
                            </p>
                            <p
                                style={{
                                    color: "#43283a",
                                    padding: "0 4.166666666666667vw",
                                    fontSize: "1.25vw",
                                    marginTop: " 0.6944444444444444vw",
                                }}
                            >
                                {item.contentPlus}
                            </p>
                        </figcaption>
                    </figure>
                </Link>
            </article>
        </div>
    );
};

export default BlogCard;
