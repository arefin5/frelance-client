import react from "react";
import { useContext, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../context";
// import { useRouter } from "next/router";
import { useHistory } from "react-router-dom";
import { Avatar } from "antd";
import Navigation from "./Navigation";
import navigation from "./navigation.css";
import Search from "./Search";
import {SearchOutlined} from '@ant-design/icons'
const Navs = (props) => {
  const history = useHistory();
  const [current, setCurrent] = useState("");
  const [state, setState] = useContext(UserContext);

  
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  // const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    history.push("/login");
  };
  return (
    <nav
      className="nav d-flex justify-content-between"
      style={{ backgroundColor: "blue" }}
    >
      <Link to="/">
        <a
          className={`nav-link text-light logo ${current === "/" && "active"}`}
        >
          <Avatar src="/images/logo.png" /> MERNCAMP
        </a>
      </Link>
      {/* search */}
      <div>
      <form className="form-inline row serchbar">
        <div className="col-9">
          <input
            className="form-control searchbar"
            type="search"
            placeholder="Search"
          />
        </div>
      </form>
<div className="ic-btn">
<SearchOutlined />

</div>
      </div>
{/*  */}
      {state !== null ? (
        <div className="menu">
          <Navigation logout={logout} />
        </div>
      ) : (
        <>
          <Link
            to="/login"
            className={`nav-link text-light ${
              current === "/login" && "active"
            }`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`nav-link text-light ${
              current === "/register" && "active"
            }`}
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default  Navs;
