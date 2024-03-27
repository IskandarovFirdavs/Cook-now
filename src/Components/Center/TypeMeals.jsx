import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TypeBlocks = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 21vw;
  height: 550px;
`;
const Types = styled(NavLink)`
  font-size: 35px;
  font-weight: 700;
  color: #84bd00;
  cursor: pointer;
  font-family: "Dancing Script", cursive;
  text-decoration: none;
`;
const Type = styled(NavLink)`
  font-size: 15px;
  font-weight: 400;
  color: #84bd00;
  cursor: pointer;
  text-decoration: none;
`;

const TypeMeals = () => {
  return (
    <TypeBlocks>
      <Types to="/First-Courses">First courses </Types>
      <Type to="/High-calories">High calories</Type>
      <Type to="/Low-calories">Low calories</Type>
      <Type to="/Cook-fastly">Cook fastly</Type>
      <Type to="/Cook-slowly">Cook slowly</Type>
      <Type to="/More-servings">More servings</Type>
      <Type to="/Less-servings">Less servings</Type>
      <Types to="/Main-Courses">Main courses</Types>
      <Type to="/High-calories2">High calories</Type>
      <Type to="/Low-calories2">Low calories</Type>
      <Type to="/Cook-fastly2">Cook fastly</Type>
      <Type to="/Cook-slowly2">Cook slowly</Type>
      <Type to="/More-servings2">More servings</Type>
      <Type to="/Less-servings2">Less servings</Type>
      <Types to="/Preparation">Preparation</Types>
      <Types to="/Dough_Products">Dough Products</Types>
    </TypeBlocks>
  );
};

export default TypeMeals;
