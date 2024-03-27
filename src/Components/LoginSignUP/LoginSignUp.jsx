import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Back = styled("div")`
  background-image: url(https://img.delicious.com.au/2uS6sbBx/w1200/del/2023/05/p109-really-good-chocolate-cake-with-double-choc-ganache-188754-1.png);
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Head = styled("text")`
  color: #ffffff;
  font-size: 65px;
  font-weight: 700;
  font-family: "Courier New", Courier, monospace;
`;
const HeadBot = styled("text")`
  color: white;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  width: 900px;
  text-align: center;
  margin-top: 30px;
`;

const But = styled("button")`
  width: 300px;
  height: 80px;
  font-size: 30px;
  margin-top: 50px;
  background: none;
  border: 3px solid white;
`;

const LoginSignUp = () => {
  return (
    <Back>
      <Head>Welcome to FoodMood :)</Head>
      <HeadBot>
        Here you can find what you want f.e : Meals , Snacks , Drinks and so on
        .You can teach usiful recipes of food which you use in your life .
      </HeadBot>
      <But>
        <NavLink to={"/Reseption"}>Sign up</NavLink>
      </But>
    </Back>
  );
};

export default LoginSignUp;
