import React, { useState } from "react";
import "./Navbar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/User";
import { AiTwotoneSetting } from "react-icons/ai";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
// import ShoppingCardtems from "../ShoppingCardtems/ShoppingCardtems";

const NavMenu = styled.div`
    display: flex;
`;
const Logo = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 110px;
    padding 10px
`;
const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    background: #f8f7f3;
    width: 500px;
    height: 100vh;
    display: flex;
    justify-content: center;
    transition: 350ms;
    z-index: 100;
`;
const UserMenu = styled.div`
    position: fixed;
    right: 70px;
    top: 70px;
    background: #43283a;
    width: 100px;
    height: ${({ userMenu }) => (userMenu ? "100px" : "0")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 350ms;
    overflow: ${({ userMenu }) => (userMenu ? "inherit" : "hidden")};
    border-radius: 10px;
    z-index: 10;
    &:before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        background: #43283a;
        right: 10px;
        top: -7px;
        transform: rotate(45deg);
    }
`;
const UserMenuItems = styled.span`
    color: white;
    font-size: 20px;
    margin: 10px 0;
    cursor: pointer;
`;

const Navbar = () => {
    const [userMenu, setuserMenu] = useState(false);
    const dispatch = useDispatch();
    const showUserMenu = () => setuserMenu(!userMenu);
    const handleLogOut = () => {
        dispatch(logout());
        setuserMenu(!userMenu);
    };
    const user = useSelector((state) => state.userReducer.user);
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <NavMenu Sidebar={Sidebar}>
            <nav>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <div className="menu">
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/blog">blog</Link>
                    </li>
                </div>
            </nav>
            <Logo src="./assets/ia_100000002761.png" alt="logo" />
            {user.role === "Admin" ? (
                <Link to="/admin">
                    <AiTwotoneSetting
                        style={{
                            cursor: "Pointer",
                            borderRadius: "50%",
                            backgroundColor: "#43283a",
                            fontSize: "50px",
                            color: "#fff",
                            padding: "10px",
                            position: "fixed",
                            right: "10px",
                            top: "10px",
                            zIndex: 9,
                        }}
                    />
                </Link>
            ) : (
                <ShoppingCard />
            )}
            {isAuth ? (
                <FaUserAlt
                    onClick={showUserMenu}
                    style={{
                        cursor: "Pointer",
                        borderRadius: "50%",
                        backgroundColor: "#43283a",
                        color: "#fff",
                        padding: "10px",
                        position: "fixed",
                        right: "70px",
                        top: "10px",
                        fontSize: "50px",
                        zIndex: 10,
                    }}
                />
            ) : (
                <Link to="/join-us">
                    <FaUserAlt
                        style={{
                            cursor: "Pointer",
                            borderRadius: "50%",
                            backgroundColor: "#43283a",
                            color: "#fff",
                            padding: "10px",
                            position: "fixed",
                            right: "70px",
                            top: "10px",
                            fontSize: "50px",
                            zIndex: 11,
                        }}
                    />
                </Link>
            )}
            <UserMenu userMenu={userMenu}>
                <UserMenuItems>order</UserMenuItems>
                <UserMenuItems onClick={handleLogOut}>Log Out</UserMenuItems>
            </UserMenu>
        </NavMenu>
    );
};

export default Navbar;
