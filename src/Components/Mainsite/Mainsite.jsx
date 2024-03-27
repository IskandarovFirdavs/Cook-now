import React, { useState } from "react";
import "./Mainsite.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkk = styled(NavLink)`
  text-decoration: none;
  color: white;
`;
const NavLinkkk = styled(NavLink)`
  text-decoration: none;
  color: blue;
`;

export default function App() {
  const [login, setLogin] = useState([]);

  const getValue = (e) => {
    setLogin((login) => [...login, e.target.value]);
  };
  return (
    <React.Fragment>
      <div className="allInputs">
        <form
          action="https://echo.htmlacademy.ru/courses"
          method="POST"
          className="form"
        >
          <h1 className="MainsiteLogin">Login</h1>
          <div className="inputs-field">
            <input
              className="Mainsiteinput"
              type="text"
              placeholder="Username"
              name="user_login"
              minLength={3}
              maxLength={50}
              required={true}
              onChange={(e) => getValue(e)} //callback
            />
            <input
              className="Mainsiteinput"
              type="password"
              placeholder="Password"
              name="user_password"
              minLength={4}
              maxLength={16}
            />
            <p className="MainsiteP">Forgot Password?</p>

            <button className="MainsitesBut" type="button">
              <NavLinkk to={"/"}>Login</NavLinkk>
            </button>
            <h6 className="MainsiteH6">
              Not a member?
              <NavLinkkk to={"/Login"}>Sign up</NavLinkkk>
            </h6>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
