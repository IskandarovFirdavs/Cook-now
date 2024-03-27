import React, { useState } from "react";
import styled from "styled-components";
import { BoxJs } from "./SearchJs";

const Name = styled("text")`
  color: #7fb600;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 900;
`;
const Block = styled("div")`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  margin-top: 30px;
  background-color: white;
  background: linear-gradient(white, white, white, white, #cfcfcf);
`;
const Img = styled("img")`
  height: 113px;
  transition: 0.5s;
  border-radius: 20px;
  &:hover {
    transform: rotate(5deg) scale(120%, 120%);
    border-radius: 20px;
  }
`;
const Blocks = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 55vw;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 850px;
  padding: 10px;
`;

const NameGarde = styled("div")`
  width: 200px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;
const Star = styled("img")`
  height: 30px;
`;

const Time = styled("img")`
  height: 17px;
  margin-left: 5px;
`;

const BlockBot = styled("div")`
  width: 200px;
  height: 45px;
  margin-top: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: start;
`;

const TimeCook = styled("text")`
  font-size: 10px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  margin-left: 5px;
  font-style: italic;
`;

const Textss = styled("div")`
  display: flex;
`;

const Header = styled("text")`
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
  color: #046c00;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const ImageBoxA = styled("a")`
  overflow: hidden;
  display: block;
  border-radius: 20px;
`;

const Searching = styled("div")`
  height: 40px;
  border-radius: 20px;
  border: 1px solid #8d8d8d;
  display: flex;
  justify-content: space-between;
`;

const NavInput = styled("input")`
  width: 100%;
  height: 38px;
  color: grey;
  border: none;
  border-radius: 21px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 20px;
`;
const SearchIcon = styled("img")`
  height: 40px;
  width: 40px;
  background-color: #c8c8c8;
  border-radius: 20px;
`;

const NotFoundImg = styled("img")`
  height: 100%;
  width: 100%;
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const FilteredData = BoxJs.filter((element) => {
    return element.name
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });

  return (
    <div>
      <div>
        <Searching>
          <NavInput
            type="search"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <SearchIcon
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
            alt=""
          />
        </Searching>
      </div>
      <Blocks>
        {FilteredData.length ? (
          FilteredData.map((d) => (
            <Block>
              <ImageBoxA href={d.a}>
                <Img src={d.rasm} alt="" />
              </ImageBoxA>
              <NameGarde>
                <Name>{d.name}</Name>
                <Star src={d.baxo} alt="" />
              </NameGarde>
              <BlockBot>
                <Textss>
                  <Time src={d.portsiya} alt="" />
                  <TimeCook>{d.quantity}</TimeCook>
                </Textss>
                <Textss>
                  <Time src={d.time} alt="" />
                  <TimeCook>{d.Ttime}</TimeCook>
                </Textss>
                <Textss>
                  <Time src={d.kalorimg} alt="" />
                  <TimeCook>{d.calories}</TimeCook>
                </Textss>
              </BlockBot>
            </Block>
          ))
        ) : (
          <NotFoundImg
            src="https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?resize=400x300&vertical=center"
            alt=""
          />
        )}
      </Blocks>
    </div>
  );
};

export default Search;
