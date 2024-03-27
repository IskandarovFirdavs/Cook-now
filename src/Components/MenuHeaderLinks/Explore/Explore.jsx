import React from "react";
import styled from "styled-components";
import { BoxJs2, BoxJs3 } from "../../Box/BoxJs";

const Block22 = styled("div")`
  width: 300px;
  height: 150px;
  border-radius: 20px;
  margin-top: 30px;
  background-color: white;
  background: linear-gradient(white, white, white, white, #cfcfcf);
`;


const Header33 = styled("text")`
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
  color: #046c00;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const Iframe44 = styled("iframe")`
  border-radius: 20px;
  width: 300px;
  height: 150px;
`;

const Boxs11 = styled("div")`
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

const Explore = () => {
  return (
    <>
      <Header33>Explore</Header33>
      <Boxs11>
        <div>
          {BoxJs2.map((d) => (
            <Block22>
              <Iframe44
                src={d.src}
                title={d.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></Iframe44>
            </Block22>
          ))}
        </div>
        <div>
          {BoxJs3.map((d) => (
            <Block22>
              <Iframe44
                src={d.src}
                title={d.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></Iframe44>
            </Block22>
          ))}
        </div>
      </Boxs11>
    </>
  );
};

export default Explore;
