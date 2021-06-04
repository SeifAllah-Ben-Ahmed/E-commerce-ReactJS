import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

const UserRoute = ({ component: Component, ...rest }) => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    if (isAuth) {
        return <Route component={Component} {...rest} />;
    }
    return <Redirect to="/join-us" />;
};

export default UserRoute;
