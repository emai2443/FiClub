/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Heart from "../../assets/heart.png";
import heroImage from "../../assets/hero_image.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-side">
        <Header />
        {/*the best ad*/}
        <div className="the_best_ad">
          <div> </div>
          <span>The best fitness website</span>
        </div>
        {/*Hero Heading*/}
        <div class="hero_text">
          <div>
            <span className="stroke_text">Achieve </span>{" "}
            {/*Stroke text is a special class in App.css which will make text outlined */}
            <span>Your</span>
          </div>
          <div>
            <span>Dream Body</span>
          </div>
          <div>
            <span>Here in FiClub your dream body is only a rep away!</span>
          </div>
        </div>

        {/*figures*/}
        <div class="figures">
          <div>
            <span>+50</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+1000</span>
            <span>Members</span>
          </div>
          <div>
            <span>+30</span>
            <span>Programs</span>
          </div>
        </div>

        {/*Hero button*/}
        <div class="hero_button">
          <button class="btn">Get Started</button>
          <button class="btn">Learn More</button>
        </div>
      </div>
      <div className="right-side">
        <button className="btn">Join Now</button>

        <div class="heart_rate">
          <img src={Heart} alt="heart_image" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </div>

        {/*Hero images*/}
        <img src={heroImage} className="hero_image" />

        {/*calories*/}
        <div className="calories">
          <img src={Calories} />
          <div>
            <span>Calories Burned</span>
            <span>340 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
