import axios from "axios";
import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
    FAIL_ARTICLE,
    GET_ARTICLE,
    GET_ARTICLES,
    LOAD_ARTICLE,
    UPDATE_ARTICLE,
} from "../constants/Article";

export const getAllArticles = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        dispatch({ type: LOAD_ARTICLE });
        const result = await axios.get("/api/article", config);
        dispatch({ type: GET_ARTICLES, payload: result.data }); //{msg,Article}
    } catch (error) {
        dispatch({ type: FAIL_ARTICLE, payload: error.response.data });
    }
};

export const getSingleArticle = (articleTitle) => async (dispatch) => {
    dispatch({ type: LOAD_ARTICLE });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const resulte = await axios.get(`/api/article/${articleTitle}`, config);
        dispatch({ type: GET_ARTICLE, payload: resulte.data }); //{article,msg}
    } catch (error) {
        dispatch({ type: FAIL_ARTICLE, payload: error.response.data });
    }
};
export const deleteArticle = (articleTitle) => async (dispatch) => {
    dispatch({ type: LOAD_ARTICLE });
    console.log(articleTitle);
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const resulte = await axios.delete(
            `/api/article/delete/${articleTitle}`,
            config
        );
        dispatch(getAllArticles());
        dispatch({ type: DELETE_ARTICLE, payload: resulte.data.msg }); //{DeleteArticle,msg}
    } catch (error) {
        dispatch({ type: FAIL_ARTICLE, payload: error.response.data });
    }
};
export const editeArticle =
    (updatedArticle, articleTitle) => async (dispatch) => {
        const formData = new FormData();
        formData.append("title", updatedArticle.title);
        formData.append("content", updatedArticle.content);
        formData.append("contentPlus", updatedArticle.contentPlus);
        formData.append("article", updatedArticle.article);
        formData.append("type", updatedArticle.type);
        // console.log(formData.get("file"));
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        try {
            const resulte = await axios.put(
                `/api/article/update/${articleTitle.split(" ").join("-")}`,
                formData,
                config
            );

            dispatch(getAllArticles());
            dispatch({ type: UPDATE_ARTICLE, payload: resulte.data }); //{UpdateArticle,msg}
        } catch (error) {
            dispatch({ type: FAIL_ARTICLE, payload: error.response.data });
            console.log(error.response.data);
        }
    };

export const addArticle = (addArticle) => async (dispatch) => {
    const formData = new FormData();
    formData.append("title", addArticle.title);
    formData.append("content", addArticle.content);
    formData.append("contentPlus", addArticle.contentPlus);
    formData.append("article", addArticle.article);
    formData.append("type", addArticle.type);
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        const resulte = await axios.post("/api/article/add/", formData, config);

        dispatch({ type: ADD_ARTICLE, payload: resulte.data.msg }); //{UpdateArticle,msg}
        dispatch(getAllArticles());
    } catch (error) {
        dispatch({ type: FAIL_ARTICLE, payload: error.response.data });
    }
};
