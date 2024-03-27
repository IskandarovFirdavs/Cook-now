import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CenterDiv = styled("div")`
  background-image: url(https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/education/hero/top-ten-foods-for-health-2x.jpg);
  justify-content: space-between;
  align-items: center;
  height: 500px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
`;

const MC = styled("text")`
  font-size: 80px;
  font-weight: 400;
  color: white;
`;
const McC = styled("text")`
  font-weight: 900;
`;
const More = styled("div")`
  cursor: pointer;
  border: 3px solid white;
  width: 400px;
  text-decoration: none;
  height: 85px;
`;

const RightDiV = styled("div")`
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 60%;
  text-align: center;
  align-items: center;
`;

const IconS = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

const Icon = styled("img")`
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 20px;
  cursor: pointer;
`;

const MoreText = styled(NavLink)`
  font-size: 60px;
  font-weight: 100;
  text-decoration: none;
  color: white;
`;

const Center = () => {
  return (
    <CenterDiv>
      <RightDiV>
        <MC>
          Meat <McC>Chicken</McC>
        </MC>
        <More>
          <MoreText
            to={
              "https://www.chickencheck.in/farm-to-table/what-are-broiler-chickens/"
            }
          >
            More
          </MoreText>
        </More>
      </RightDiV>
      <IconS>
        <NavLink to="https://www.facebook.com/?locale=ru_RU">
          <Icon
            src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
            alt=""
          />
        </NavLink>
        <NavLink to="https://youtube.com/@Firdavs-Iskandarov001?si=6As17asX7okcBNJK">
          <Icon
            src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
            alt=""
          />
        </NavLink>
        <NavLink to="https://twitter.com/?lang=ru">
          <Icon
            src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
            alt=""
          />
        </NavLink>
        <NavLink to="https://www.instagram.com/reel/C21AfbsIezh/?igsh=MWFyY3FmdG1rd2xmOA==">
          <Icon
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
            alt=""
          />
        </NavLink>
      </IconS>
    </CenterDiv>
  );
};

export default Center;
