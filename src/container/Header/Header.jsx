import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Working in a restaurant is hard. It’s all too easy to get burned out
        when the kitchen is slammed, customers are demanding, and you’re on your
        feet for hours.
        <br/> <br/>
        <button type='button' className="custom__button">Explore Menu</button>
      </p>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);
export default Header;
