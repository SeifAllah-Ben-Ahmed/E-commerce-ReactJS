import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = () => {
    return (
        <>
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
                            src="./assets/coffee_gallery_65.jpg"
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
                                Plum Summer Slushie
                            </h3>
                            <p
                                style={{
                                    color: "#43283a",
                                    padding: "0 4.166666666666667vw",
                                    fontSize: "1.25vw",
                                    marginTop: " 0.6944444444444444vw",
                                }}
                            >
                                This Summer Slushie is perfect for an afternoon
                                tipple in the sun.
                            </p>
                        </figcaption>
                    </figure>
                </Link>
            </article>
        </>
    );
};

export default ArticleCard;
