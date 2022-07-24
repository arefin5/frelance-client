import react from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navigation from "./navigation.css";
import { DownOutlined } from "@ant-design/icons";
import { UserContext } from "../context";

const Navigation = ({ logout }) => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="navbars">
      <>
      <Link to="/find-job">Find Work </Link>
      <Link to="/frelancer/jobs">My Jobs</Link>

      <Link to="/report">Report </Link>
      <Link to="/messege">Messess</Link>
      <Link to="/users/helps">help </Link>

      </>
      <div className="dropdowns">
        <button className="dropbtns">
          {/* <DownOutlined /> */}
          {state && state.user && state.user.name}
          <DownOutlined />
        </button>
        <div className="dropdown-contents">
          <Link to="/user/dashboard">Dashboard</Link>

          {state.user.role == "Admin" && (
            <>
              
                <Link to="/admin">Admin</Link>
            </>
          )}
          {/* profile */}
          <Link to="/user/profile/update">
                    Profile
                </Link>
        
            <a onClick={logout} className="nav-link">
              Logout
            </a>
 
        </div>
      </div>
    </div>
  );
};

export default Navigation;
