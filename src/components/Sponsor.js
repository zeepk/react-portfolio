import React from "react";
import "../styles/Uses.css";
import Me from "../images/me3.png";
const Sponsor = () => {
  return (
    <div className="sponsor-page">
      <div className="sponsor-container">
        <img src={Me} alt="matt hughes" className="sponsor-image" />
        <h1>hello :)</h1>
        <p>{`I'm Matt and I make websites and tools and other tech stuff.`}</p>
        <p>
          {
            "I hope you like the things I make! If you feel like supporting me in any way, consider "
          }
          <a href="https://www.twitch.tv/zee_pk" className="twitch">
            following me on twitch
          </a>
          {" or sponsoring me with a few bucks "}
          <a href="https://github.com/sponsors/zeepk" className="github">
            on github
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sponsor;
