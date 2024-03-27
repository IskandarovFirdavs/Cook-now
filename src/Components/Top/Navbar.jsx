import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavbarDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
`;
const Logo = styled("img")`
  widows: 90px;
  height: 90px;
`;

const SerchText = styled(NavLink)`
  font-weight: 500;
  font-family: "Times New Roman", Times, serif;
  height: 50px;
  display: flex;
  border: 2px solid #007500;
  width: 40%;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  color: #007500;
  align-items: center;
  background-color: none;
  font-size: 20px;
  border-radius: 40px;
  font-weight: 800;
`;

const CdnIcon = styled("img")`
  width: 40px;
  height: 40px;
  margin-left: -20px;
`;

const Quantity = styled("div")`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #00d800;
  border-radius: 50%;
  margin-left: -7px;
  margin-top: -10px;
  font-size: 20px;
  font-weight: 600;
`;

const SdnText = styled("div")`
  width: 55px;
  height: 50px;
  display: flex;
`;
const ProfilIcon = styled("img")`
  widows: 40px;
  height: 40px;
`;

const NavRight = styled("div")`
  display: flex;
  width: 20vw;
  height: 40px;
  justify-content: end;
`;

const Navbar = () => {
  return (
    <NavbarDiv>
      <NavLink to={"/"}>
        <Logo
          src="https://media.licdn.com/dms/image/D5622AQFv5l3QS5zrUQ/feedshare-shrink_800/0/1694761697348?e=2147483647&v=beta&t=QNAZuPJHN39x0cbfRpRvlQjhPZkHDcAejJmOJ67DhZM"
          alt=""
        />
      </NavLink>
      <SerchText to={"/Search"}>Search</SerchText>
      <NavRight>
        <SdnText>
          <NavLink to={"/My_results"}>
            <CdnIcon
              src="https://cdn-icons-png.flaticon.com/512/649/649395.png"
              alt=""
            />
          </NavLink>
          <Quantity>0</Quantity>
        </SdnText>
        <NavLink to={"/Profile"}>
          <ProfilIcon
            src="https://static-00.iconduck.com/assets.00/profile-icon-512x512-w0uaq4yr.png"
            alt=""
          />
        </NavLink>
      </NavRight>
    </NavbarDiv>
  );
};

export default Navbar;
