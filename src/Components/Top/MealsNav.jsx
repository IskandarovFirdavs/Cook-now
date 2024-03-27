import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MealsNavDiv = styled("div")`
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Name = styled(Link)`
  font-size: 65px;
  font-weight: 700;
  text-decoration: none;
  color: #84bd00;
  font-family: "Dancing Script", cursive;
  cursor: pointer;
`;

const LinK = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: #84bd00;
  text-decoration: none;
  cursor: pointer;
`;

const Links = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 48%;
  padding: 15px;
  border-top: 2px solid #a9a9a977;
  border-bottom: 2px solid #a9a9a977;
`;

const MealsNav = () => {
  return (
    <MealsNavDiv>
      <Name to={"/"}>Food Mood :)</Name>
      <Links>
        <LinK to={"/"}>Home</LinK>
        <LinK to={"/Explore"}>Explore</LinK>
        <LinK to={"/Help"}>Help</LinK>
        <LinK to={"/Profile"}>Profile</LinK>
      </Links>
    </MealsNavDiv>
  );
};

export default MealsNav;
