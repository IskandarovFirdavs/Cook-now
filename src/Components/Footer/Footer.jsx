import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterDiv = styled("div")`
  height: 380px;
  background-image: url(https://i.ytimg.com/vi/nK1IF1ftGIg/maxresdefault.jpg);
  flex-shrink: 0;
  margin-top: 80px;
`;
const Orders = styled("div")`
  display: flex;
  justify-content: space-around;
`;
const Rivo = styled(Link)`
  color: #fff;
  font-family: "Roboto Slab";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  line-height: normal;
`;

const SM = styled(Link)`
  color: #fff;
  font-family: "Roboto Slab";
  font-size: 22px;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-top: -5px;
`;
const Ficons = styled("img")`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  margin-left: 20px;
`;
const SMicons = styled("div")`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 150px;
  height: 50px;
`;
const MainButton = styled("input")`
  width: 487px;
  height: 57px;
  flex-shrink: 0;
  background: none;
  border-radius: 3px;
  font-size: 100%;

  color: white;
  border: 3px solid white;
`;
const InsideButton = styled("button")`
  width: 115px;
  height: 57px;
  flex-shrink: 0;
  background: white;
  color: black;
  border: 2px solid white;
  margin-left: -114px;
  font-size: 100%;
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease-in;
  }
`;

const Buttons = styled("div")`
  display: flex;
`;
const Form = styled("form")`
  display: flex;
  flex-direction: column;
`;

const OrderP = styled(Link)`
  color: #e6e6e6;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const Order2 = styled("div")`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
`;

const BottomPs = styled("div")`
  display: flex;
  justify-content: end;
  align-items: end;
  margin-top: 50px;
`;

const BottompP = styled("text")`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 35px;
`;

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    alert("Email submitted:", email);
  };
  return (
    <FooterDiv>
      <Orders>
        <Order2>
          <Rivo to={"/"}>GoodMood</Rivo>
          <SM to={"/Help"}>Social Media</SM>
          <SMicons>
            <Ficons
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
              alt=""
            />
            <Ficons
              src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
              alt=""
            />
            <Ficons
              src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
              alt=""
            />
          </SMicons>
        </Order2>
        <Order2>
          <OrderP to={"/First-Courses"}>First courses</OrderP>
          <OrderP to={"/Main-Courses"}>Main courses</OrderP>
          <OrderP to={"/Preparation"}>Overview</OrderP>
          <OrderP to={"/Snacks"}>Snacks</OrderP>
          <OrderP to={"/Desert"}>Deserts</OrderP>
        </Order2>
        <Order2>
          <OrderP to={"/Preparation"}>Preparation</OrderP>
          <OrderP to={"/Dough_Products"}>Dough products</OrderP>
          <OrderP to={"/Drinks"}>Drinks recipes</OrderP>
          <OrderP to={"/Marinade"}>Marinade recipes</OrderP>
          <OrderP to={"/Seasoning"}>Souses recipes</OrderP>
        </Order2>
        <Order2>
          <OrderP>Stay up to date</OrderP>
          <Form onSubmit={handleFormSubmit}>
            <label htmlFor="email">
              <OrderP>Email:</OrderP>
            </label>
            <Buttons>
              <MainButton
                type="email"
                id="email"
                value={email}
                onChange={handleInputChange}
              />
              <InsideButton type="submit">Submit</InsideButton>
            </Buttons>
          </Form>
        </Order2>
      </Orders>
      <BottomPs>
        <BottompP>Terms</BottompP>
        <BottompP>Privacy</BottompP>
        <BottompP>Cookies</BottompP>
      </BottomPs>
    </FooterDiv>
  );
};

export default Footer;
