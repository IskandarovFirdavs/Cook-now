import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderHeadIconText = styled("div")`
  display: flex;
  height: 30px;
  background-color: black;
  justify-content: space-between;
`;
const HeadLeft = styled("div")`
  width: 30vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const HeadRight = styled("div")`
  width: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const HeadText = styled(NavLink)`
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 10px;
  color: white;
  text-decoration: none;
`;
const HeadIcons = styled("img")`
  height: 15px;
  width: 15px;
`;
const HeadIconText = styled("div")`
  width: 8vw;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderHeadIconText>
      <HeadLeft>
        <HeadText
          to={
            "https://www.google.com/search?q=cooking+courses+online+free&rlz=1C1GCEA_enUZ1082UZ1082&oq=cooking+courses+online+free&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIICAEQABgWGB7SAQoxMjE3NmoxajE1qAIAsAIA&sourceid=chrome&ie=UTF-8"
          }
        >
          COURCES
        </HeadText>
        <HeadText
          to={
            "https://www.google.com/search?q=books+about+cooking&sca_esv=85af15397c77c0f6&rlz=1C1GCEA_enUZ1082UZ1082&sxsrf=ACQVn0_JRf37UAZaDMbMTTTzbmhVwi7KrA%3A1709028215876&ei=d7PdZaD8NNK1wPAP5daXuA4&udm=&ved=0ahUKEwjgk9-dosuEAxXSGhAIHWXrBecQ4dUDCBA&uact=5&oq=books+about+cooking&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhNib29rcyBhYm91dCBjb29raW5nMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHSIoEUB1YHXABeAKQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgKgAgfCAgoQABhHGNYEGLADmAMAiAYBkAYHkgcBMg&sclient=gws-wiz-serp"
          }
        >
          BOOKS
        </HeadText>
        <HeadText
          to={
            "https://www.google.com/search?q=RESEIPE+INDEX&sca_esv=85af15397c77c0f6&rlz=1C1GCEA_enUZ1082UZ1082&sxsrf=ACQVn0-8BP1C-8l0haYEsXacsJXne5KZ5A%3A1709028526210&ei=rrTdZZfADPbQwPAPopOGyAk&udm=&ved=0ahUKEwiXz9yxo8uEAxV2KBAIHaKJAZkQ4dUDCBA&uact=5&oq=RESEIPE+INDEX&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIg1SRVNFSVBFIElOREVYMgcQABiABBgNMgcQABiABBgNMgYQABgeGA0yBhAAGB4YDTIGEAAYHhgNMgYQABgeGA0yBhAAGB4YDTIGEAAYHhgNMgYQABgeGA0yBhAAGB4YDUiIDFC7CFi7CHACeACQAQCYAZMBoAGTAaoBAzAuMbgBA8gBAPgBAvgBAZgCA6ACowHCAgoQABhHGNYEGLADmAMAiAYBkAYIkgcDMi4x&sclient=gws-wiz-serp"
          }
        >
          RESEIPE INDEX
        </HeadText>
        <HeadText
          to={
            "https://www.google.com/search?q=popular+family+meals+recipes&sca_esv=85af15397c77c0f6&rlz=1C1GCEA_enUZ1082UZ1082&sxsrf=ACQVn09UuBmhh6EgRtgGenN-GtYMGmVU3g%3A1709028583365&ei=57TdZdb1Fc-vwPAPsfO86A4&udm=&oq=popular+meals+reci&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIhJwb3B1bGFyIG1lYWxzIHJlY2kqAggAMggQABgIGB4YDUj1YlDeDFj_UXAAeAWQAQCYAcoCoAG3HKoBCDAuMTEuNC4zuAEDyAEA-AEBmAIWoAKaHcICBBAAGEfCAhIQIxiABBiKBRgnGJ0CGEYYgALCAgoQIxiABBiKBRgnwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICDhAuGIMBGNQCGLEDGIAEwgIcEAAYgAQYigUYnQIYRhiAAhiXBRiMBRjdBNgBAcICCBAuGIAEGLEDwgIFEAAYgATCAgsQLhiDARixAxiABMICCxAuGIAEGLEDGIMBwgIFEC4YgATCAggQABiABBjLAcICDRAAGIAEGMsBGEYY-wHCAhkQABiABBjLARhGGPsBGJcFGIwFGN0E2AEBwgIOEC4YgAQYigUYsQMYgwHCAgoQABiABBgUGIcCwgIIEC4YgAQYywHCAgYQABgWGB7CAggQABgWGB4YD8ICBRAhGKABwgIEECEYFcICBRAhGJ8FmAMAiAYBkAYIugYGCAEQARgTkgcINC4xMS40LjM&sclient=gws-wiz-serp"
          }
        >
          POPULAR
        </HeadText>
      </HeadLeft>
      <HeadRight>
        <HeadIconText>
          <HeadIcons
            src="https://cdn0.iconfinder.com/data/icons/thin-line-color-2/21/05-512.png"
            alt=""
          />
          <HeadText to={"/Login"}>Sign up</HeadText>
        </HeadIconText>
        <HeadIconText>
          <HeadIcons
            src="https://cdn-icons-png.freepik.com/256/13078/13078032.png"
            alt=""
          />
          <HeadText to={"/Reseption"}>LOGIN</HeadText>
        </HeadIconText>
      </HeadRight>
    </HeaderHeadIconText>
  );
};

export default Header;
