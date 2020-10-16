import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import shield from "../shield.png";
function Layout(props) {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
  };
  const [pathname, setPathname] = useState("/");
  const checkActive = (match, location) => {
    if (!location) return false;
    setPathname(location.pathname);
    return pathname === "/" ? false : pathname === "/";
  };
  return (
    <div>
      <div className="navbar  navbar-expand-lg bg-dark navbar-dark">
        <NavLink to="/" className="navbar-brand">
          <img
            className="rounded img-fluid"
            style={{ height: "40px", width: "40px" }}
            src={shield}
            alt="codeclouds logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {props.loggedIn ? (
            <Fragment>
              <ul className="navbar-nav mr-auto">
                <li
                  className={
                    "nav-item " + (pathname === "/task" ? "active" : "")
                  }
                >
                  <NavLink
                    isActive={checkActive}
                    to="/task"
                    className="nav-link"
                  >
                    Warehouse
                  </NavLink>
                </li>
                <li
                  className={
                    "nav-item " + (pathname === "/taskList" ? "active" : "")
                  }
                >
                  <NavLink
                    isActive={checkActive}
                    to="/taskList"
                    className="nav-link"
                  >
                    View
                  </NavLink>
                </li>
              </ul>
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </div>
      </div>
      {props.children}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "SET_LOGOUT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
