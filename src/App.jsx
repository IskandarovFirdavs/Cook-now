import "./App.css";
import Center from "./Components/Center/Center";
import Header from "./Components/Top/Header";
import Navbar from "./Components/Top/Navbar";
import MealsNav from "./Components/Top/MealsNav";
import styled from "styled-components";
import TypeMeals from "./Components/Center/TypeMeals";
import { Route, Routes } from "react-router-dom";
import TypeMealsCopy from "./Components/Center/TypeMealsCopy";
import FirstC from "./Food/LeftFood/FirstCourse/FirstC";
import Box from "./Components/Box/Box";
import MainCource from "./Food/LeftFood/MainCourse/MainCource";
import CookFast from "./Food/LeftFood/FirstCourse/CookFast";
import CookSlow from "./Food/LeftFood/FirstCourse/CookSlow";
import HighCcal from "./Food/LeftFood/FirstCourse/HighCcal";
import LowCcal from "./Food/LeftFood/FirstCourse/LowCcal";
import FCfewSer from "./Food/LeftFood/FirstCourse/FCfewSer";
import FCmanySer from "./Food/LeftFood/FirstCourse/FCmanySer";
import MCCookFast from "./Food/LeftFood/MainCourse/MCCookFast";
import MCCookSlow from "./Food/LeftFood/MainCourse/MCCookSlow";
import MCmanySer from "./Food/LeftFood/MainCourse/MCmanySer";
import MCfewSer from "./Food/LeftFood/MainCourse/MCfewSer";
import Preparation from "./Food/LeftFood/Preparation/Preparation";
import DoughPr from "./Food/LeftFood/Dough Products/DoughPr";
import MCHighCcal from "./Food/LeftFood/MainCourse/MCHighCcal";
import MCLowCcal from "./Food/LeftFood/MainCourse/MCLowCcal";
import Footer from "./Components/Footer/Footer";
import Mainsite from "./Components/Mainsite/Mainsite";
import LoginSignUp from "./Components/LoginSignUP/LoginSignUp";
import Explore from "./Components/MenuHeaderLinks/Explore/Explore";
import Help from "./Components/MenuHeaderLinks/Help/Help";
import SweetsR from "./Food/RightFood/SweetsR";
import DrinkR from "./Food/RightFood/DrinkR";
import MarinadeR from "./Food/RightFood/MarinadeR";
import SeasoningR from "./Food/RightFood/SeasoningR";
import FavoriteList from "./Components/MenuHeaderLinks/Profile/Profile";
import MyResult from "./Components/MenuHeaderLinks/Profile/MyResult";
import SoucesR from "./Food/RightFood/SoucesR";
import Source from "./Components/Footer/Source";
import Search from "./Components/Search/Search";
import Slider from "./Components/Slider/Slider";
import { slidesData } from "./Components/Slider/SliderJs";
import Comments from "./Components/Comments/Comments";
const Menu = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Fruits = styled("img")`
  border-radius: 280px;
  height: 320px;
  margin-left: 30px;
  margin-top: 100px;
`;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Reseption" element={<Mainsite />}></Route>
        <Route path="/Login" element={<LoginSignUp />}></Route>
      </Routes>
      <Header />
      <Navbar />
      <Center />
      <MealsNav />
      <Menu>
        <div>
          <TypeMeals />
          <Fruits
            src="https://st2.depositphotos.com/1020618/5476/i/450/depositphotos_54766001-stock-photo-fresh-salad-with-flying-vegetables.jpg"
            alt=""
          />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Box />}></Route>
            <Route path="/Explore" element={<Explore />}></Route>
            <Route path="/Help" element={<Help />}></Route>
            <Route path="/First-Courses" element={<FirstC />}></Route>
            <Route path="/Main-Courses" element={<MainCource />}></Route>
            <Route path="/High-calories" element={<HighCcal />}></Route>
            <Route path="/Low-calories" element={<LowCcal />}></Route>
            <Route path="/Cook-fastly" element={<CookFast />}></Route>
            <Route path="/Cook-slowly" element={<CookSlow />}></Route>
            <Route path="/More-servings" element={<FCmanySer />}></Route>
            <Route path="/Less-servings" element={<FCfewSer />}></Route>
            <Route path="/Souses" element={<SoucesR />}></Route>
            <Route path="/Search" element={<Search />}></Route>
            <Route path="/Cook-fastly2" element={<MCCookFast />}></Route>
            <Route path="/Cook-slowly2" element={<MCCookSlow />}></Route>
            <Route path="/High-calories2" element={<MCHighCcal />}></Route>
            <Route path="/Low-calories2" element={<MCLowCcal />}></Route>
            <Route path="/More-servings2" element={<MCmanySer />}></Route>
            <Route path="/Less-servings2" element={<MCfewSer />}></Route>
            <Route path="/Drinks" element={<DrinkR />}></Route>
            <Route path="/Preparation" element={<Preparation />}></Route>
            <Route path="/Dough_Products" element={<DoughPr />}></Route>
            <Route path="/Desert" element={<SweetsR />}></Route>
            <Route path="/Marinade" element={<MarinadeR />}></Route>
            <Route path="/Seasoning" element={<SeasoningR />}></Route>
            <Route path="/Profile" element={<FavoriteList />}></Route>
            <Route path="/My_results" element={<MyResult />}></Route>
          </Routes>
        </div>
        <div>
          <TypeMealsCopy />
          <Fruits
            src="https://img.freepik.com/premium-photo/splash-water-with-fruits-middle-it_655090-83944.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais"
            alt=""
          />
        </div>
      </Menu>
      <Slider slides={slidesData} /> <Source />
    
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
