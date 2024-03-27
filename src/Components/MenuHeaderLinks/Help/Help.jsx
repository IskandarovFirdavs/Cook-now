import React from "react";
import styled from "styled-components";
import { HelpJs } from "./HelpJs";

const HelpList = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 1000px;
  text-align: center;
  width: 50vw;
`;

const Header = styled("text")`
  font-size: 40px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 900;
  color: green;
  cursor: text;
`;
const HeaderP = styled("text")`
  font-size: 25px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  color: #00aa00;
  cursor: text;
`;

const Icon = styled("img")`
  width: 60px;
  height: 60px;
`;

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

const Help = () => {
  return (
    <>
      <Header>Help</Header>
      <HelpList>
        <Header>How can we help you ?</Header>
        <HeaderP>
          If anything is not working or working wrong,you can connect very easy
          with us with our social media! Community Forums: Join our vibrant
          community forums where users share experiences, tips, and solutions.
          Connect with fellow users and experts to get quick assistance.
          Knowledge Base: Browse through our extensive knowledge base filled
          with articles, tutorials, and FAQs. Find step-by-step guides and
          troubleshooting tips for common issues.
        </HeaderP>
        <Boxs>
          {HelpJs.map((d) => (
            <Box>
              <Icon src={d.img} alt="" />
              <Header>{d.text}</Header>
              <HeaderP>{d.text2}</HeaderP>
            </Box>
          ))}
        </Boxs>
      </HelpList>
    </>
  );
};

export default Help;
