import React from "react";
import { Link, useLocation } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";


import '../styles/NavBar.css'

const NavBar = () => {

  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage("token");
  const location = useLocation();

  if (token) {
    return (
      <div id="nav-inner-container">
        <h1>ChirpHub</h1>
        <Link 
          to="/" 
          className={location.pathname === "/" 
            ? "nav-item active" 
            : "nav-item"
          }>Feed</Link>
        <Link
          to="/tag/:tagId"
          className={location.pathname.startsWith("/tag")
            ? "nav-item active"
            : "nav-item"
          }>Tags</Link>
        <Link 
          to="/notifications" 
          className={location.pathname === "/notifications" 
            ? "nav-item active" 
            : "nav-item"
          }>Notifications</Link>
        <Link 
          to="/messages" 
          className={location.pathname === "/messages" 
            ? "nav-item active" 
            : "nav-item"
          }>Messages</Link>
        <Link 
          to="/lists" 
          className={location.pathname === "/lists" 
            ? "nav-item active" 
            : "nav-item"
          }>Lists</Link>
        <Link 
          to="/bookmarks" 
          className={location.pathname === "/bookmarks" 
            ? "nav-item active" 
            : "nav-item"
          }>Bookmarks</Link>
        <Link 
          to="/profile" 
          className={location.pathname === "/profile" 
            ? "nav-item active" 
            : "nav-item"
          }>Profile</Link>
        <Link 
          to="/more" 
          className={location.pathname === "/more" 
            ? "nav-item active" 
            : "nav-item"
          }>More</Link>
        <Link
          to="/logout"
          className={location.pathname === "/logout"
            ? "nav-item active"
            : "nav-item"
          }>Log Out</Link>
      </div>
    );
  } else {
    return (
      <div id="nav-inner-container">
        <h1>ChirpHub</h1>
        <Link
          to="/"
          className={location.pathname === "/"
            ? "nav-item active"
            : "nav-item"
          }>Home</Link>
        <Link
          to="/explore"
          className={location.pathname === "/explore"
            ? "nav-item active"
            : "nav-item"
          }>Explore</Link>
        <Link
          to="/notifications"
          className={location.pathname === "/notifications"
            ? "nav-item active"
            : "nav-item"
          }>Notifications</Link>
        <Link
          to="/messages"
          className={location.pathname === "/messages"
            ? "nav-item active"
            : "nav-item"
          }>Messages</Link>
        <Link
          to="/lists"
          className={location.pathname === "/lists"
            ? "nav-item active"
            : "nav-item"
          }>Lists</Link>
        <Link
          to="/bookmarks"
          className={location.pathname === "/bookmarks"
            ? "nav-item active"
            : "nav-item"
          }>Bookmarks</Link>
        <Link
          to="/profile"
          className={location.pathname === "/profile"
            ? "nav-item active"
            : "nav-item"
          }>Profile</Link>
        <Link
          to="/more"
          className={location.pathname === "/more"
            ? "nav-item active"
            : "nav-item"
          }>More</Link>
        <Link
          to="/register"
          className={location.pathname === "/register"
            ? "nav-item active"
            : "nav-item"
          }>Register</Link>
        <Link
          to="/login"
          className={location.pathname === "/login"
            ? "nav-item active"
            : "nav-item"
          }>Log In</Link>
      </div>
    );
  }
}

export default NavBar;
