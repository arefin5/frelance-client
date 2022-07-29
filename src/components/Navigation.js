import react from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navigation from "./navigation.css";
import { DownOutlined, InboxOutlined } from "@ant-design/icons";
import { UserContext } from "../context";
import {
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navigation = ({ logout, direction, ...args }) => {
  const [state, setState] = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userType = state.user.role;
  console.log(userType);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      <div
        className="collapse navbar-collapse menu"
        id="navbarSupportedContent"
      >
        <>
          <NavItem>
            <Link className="nav-link" to="/find-job">
              Find Work{" "}
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/frelancer/jobs">
              My-Jobs
            </Link>
          </NavItem>
          {/*  */}
          <NavItem>
            <Link className="nav-link" to="/users/helps">
              ?{" "}
            </Link>
          </NavItem>
          {/*  */}
          <NavItem>
            <Link className="nav-link" to="/messege">
              <InboxOutlined className="text-danger" id="msg" />
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/byer-deshboard">
              Byer
            </Link>
          </NavItem>
          {/*  */}
        </>
      </div>
      <div id="dp" className="d-flex">
        <Dropdown id="dp" isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle caret>
            {state && state.user && state.user.name}
          </DropdownToggle>
          <DropdownMenu {...args}>
            <DropdownItem header>
              <Link to="/user/dashboard">Dashboard</Link>
            </DropdownItem>

            {(() => {
              switch (userType) {
                case "Admin":
                  return (
                    <DropdownItem header>
                      <Link to="/admin">Admin</Link>
                    </DropdownItem>
                  );
                case "Byar":
                  return (
                    <>
                      <DropdownItem header>
                        <Link to="/byer-deshboard">Byer</Link>
                      </DropdownItem>
                    </>
                  );
                default:
                  return <></>;
              }
            })()}

            <DropdownItem>
              <Link to="/user/profile/update">Profile</Link>
            </DropdownItem>

            <DropdownItem>
              <a onClick={logout} className="nav-link">
                Logout
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
};

export default Navigation;
