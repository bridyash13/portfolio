import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./headersocials";
import myself from "./../../images/me.png"
import '../header/header.css'

const Header = () => {
  return (
    <header id=" ">
      <div class="container header_container">
        <h5>Hello I'm</h5>
        <h1>Yash Brid</h1>
        <div class="text-light">Full Stack Developer | Machine Learning Enthusiast | Forever Learner <br></br> <h6>I am a sharp observer and an enthusiastic learner with great
        programming abilities. <br></br> An aspirant software engineer and problem
        solver with strong problem-solving and strategic planning skills.</h6> </div>
        <CTA></CTA>

        <HeaderSocials></HeaderSocials>
        <div className="me">
          <img src={myself} alt="me"></img>
        </div>

        <a href="#education" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
