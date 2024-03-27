import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Img = styled("img")`
  height: 150px;
  width: 150px;
`;

const ProfileText = styled("text")`
  color: #71005b;
  font-weight: 900;
  font-size: 50px;
`;
const ProText2 = styled("text")`
  color: #71005b;
  font-weight: 600;
  font-size: 50px;
`;
const ProfileDiv = styled("div")`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 45vw;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled("input")`
  border-color: none;
  border: none;
  background: none;
  color: #71005b;
  font-weight: 900;
  font-size: 25px;
`;
const Button = styled("button")`
  border: none;
  background: #71005b;
  color: white;
  font-weight: 900;
  font-size: 25px;
  width: 300px;
  height: 50px;
  cursor: pointer;
  border-radius: 25px;
`;

const FavoriteList = () => {
  return (
    <>
      <ProfileText>My Profile</ProfileText>
      <ProfileDiv>
        <Img
          src="https://cdn-icons-png.freepik.com/512/5539/5539922.png"
          alt=""
        />
        <ProText2>I am:</ProText2>
        <Input type="text" placeholder="Surname :" />
        <Input type="text" placeholder="Name :" />{" "}
        <Link to={"/My_results"}>
          <Button>Show my results</Button>
        </Link>
      </ProfileDiv>
    </>
  );
};

export default FavoriteList;
