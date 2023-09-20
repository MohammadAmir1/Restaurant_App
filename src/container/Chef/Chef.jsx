import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            A recipe has no soul, you asthe cook must bring soul to the recipe.
          </p>
        </div>
        <p className="p__opensans">
          "You don't have to cook fancy or complicated masterpieces, just good
          food from fresh ingredients. Julia Chila
        </p>
      </div>

<div className="app__chef-sign">
<p> Kelvin Luo</p>
<p className="p__opensans">Chef & Founder</p>
<img src={images.sign} alt='sign'/>
</div>
    </div>
  </div>
);

export default Chef;
