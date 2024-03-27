import React from "react";
import styled from "styled-components";
import { MarinadeJs, MarinadeJs2 } from "./RightJs";
const Block = styled("div")`
  width: 300px;
  height: 150px;

  border-radius: 20px;
  margin-top: 30px;
  background-color: white;
  background: linear-gradient(white, white, white, white, #cfcfcf);
`;

const Header = styled("text")`
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
  color: #046c00;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const Iframe = styled("iframe")`
  border-radius: 20px;
  width: 300px;
  height: 150px;
`;

const Boxs = styled("div")`
  display: flex;
  width: 50vw;
  height: 1200px;
  justify-content: space-between;
  margin-top: 20px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 1000px;
  padding: 10px;
`;

const MarinadeR = () => {
  return (
    <>
    <Header>Marinade (only videos)</Header>
    <Boxs>
      <div>
        {MarinadeJs2.map((d) => (
          <Block>
            <Iframe
              src={d.src}
              title={d.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Iframe>
          </Block>
        ))}
      </div>
      <div>
        {MarinadeJs.map((d) => (
          <Block>
            <Iframe
              src={d.src}
              title={d.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Iframe>
          </Block>
        ))}
      </div>
    </Boxs>
  </>
  );
};

export default MarinadeR;
