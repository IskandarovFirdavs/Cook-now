import React from "react";
import styled from "styled-components";
import { ProfileJs } from "../Help/HelpJs";

const Box = styled("div")`
  width: 300px;
  text-align: center;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
const Boxs = styled("div")`
  width: 100%;
  height: 600px;
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled("text")`
  font-size: 40px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 900;
  color: #71005b;
  cursor: text;
`;
const HeaderP = styled("text")`
  font-size: 25px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  color: #71005b;
  cursor: text;
`;

const Icon = styled("img")`
  width: 60px;
  height: 60px;
`;
const ProfileText = styled("text")`
  color: #71005b;
  font-weight: 900;
  font-size: 50px;
`;

const Result = styled("div")`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MyResult = () => {
  return (
    <Result>
      <ProfileText>My Results</ProfileText>
      <Boxs>
        {ProfileJs.map((d) => (
          <Box>
            <Icon src={d.img} alt="" />
            <Header>{d.text}</Header>
            <HeaderP>{d.text2}</HeaderP>
          </Box>
        ))}
      </Boxs>
    </Result>
  );
};

export default MyResult;
