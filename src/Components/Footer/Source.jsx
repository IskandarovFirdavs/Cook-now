import React from "react";
import styled from "styled-components";
import { FooterJs } from "./FooterJs";

const Main = styled("div")`
  display: flex;
  align-items: center;
  width: 600px;
  height: 300px;
`;

const All = styled("div")`
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
`;

const Block = styled("div")`
  display: flex;
  height: 100px;
  justify-content: start;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const Img = styled("img")`
  height: 100px;
  width: 100px;
`;

const Text = styled("text")`
  height: 15px;
  font-size: 25px;
  font-weight: 700;
  font-family: "Courier New", Courier, monospace;
  color: green;
`;
const Text2 = styled("text")`
  font-family: "Times New Roman", Times, serif;
  height: 10px;
  color: greenyellow;
  margin-top: 25px;
  font-weight: 600;
`;

const Source = () => {
  return (
    <All>
      {FooterJs.map((d) => (
        <Main>
          <Img src={d.img} alt="" />
          <Block>
            <Text>{d.maintext}</Text>
            <Text2>{d.text}</Text2>
          </Block>
        </Main>
      ))}
    </All>
  );
};

export default Source;
