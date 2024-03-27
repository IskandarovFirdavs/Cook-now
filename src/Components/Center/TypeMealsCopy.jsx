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

const TypeMealsCopy = () => {
  return (
    <TypeBlocks>
      <Types to={"/Marinade"}>Marinade recipes</Types>
      <Types to={"/Drinks"}>Drink recipes</Types>
      <Types to={"/Seasoning"}>Seasoning recipes</Types>
      <Types to={"/Desert"}>Sweets recipes</Types>
      <Types to={"/Souses"}>Souses recipes</Types>
    </TypeBlocks>
  );
};

export default TypeMealsCopy;
