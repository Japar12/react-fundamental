import { NavLink, Link, Outlet } from "react-router-dom";
import "../style/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{
          marginRight: 5,
        }}
        to="/"
      >
        Home
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{
          marginRight: 5,
          marginLeft: 5,
        }}
        to="/blog"
      >
        Blog
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        style={{
          marginLeft: 5,
        }}
        to="/about"
      >
        About
      </NavLink>
      <p />
      <Outlet />
    </>
  );
}

export default RootLayout;
