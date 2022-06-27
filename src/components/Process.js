import React from "react";
import Fade from "react-reveal/Fade";
import Clip from "../images/twitch-clip.mp4";
import Toolbox from "../images/toolbox.png";
import Python from "../images/python.png";
import Dotnet from "../images/dotnet-logo.png";
import ReactLogo from "../images/react.svg";
import Vue from "../images/vue.png";

const Process = () => {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          color: "white",
          zIndex: 100,
          backgroundColor: "transparent",
          position: "relative",
          top: 0,
        }}
      >
        My process
      </p>
      <div className="p-grid" style={{ margin: 0, minHeight: "80vh" }}>
        <div
          className="p-col-12 p-md-6"
          style={{
            backgroundColor: "#4e4e4e",
          }}
        >
          <div
            style={{
              color: "white",
              padding: "10vh 0 10vh 5vw",
              fontSize: "20px",
              maxWidth: "500px",
            }}
          >
            <div>I ♥ the dev community!</div>
            <div>Live streaming, Discord, and Twitter keep me involved</div>
            <div>(and the latest updates to languages & frameworks)</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Fade>
              <video
                style={{
                  width: "90vw",
                  maxWidth: "90%",
                  paddingBottom: "10vh",
                }}
                src={
                  "https://production.assets.clips.twitchcdn.net/AT-cm%7Cm_zLbwEfyR5vNQz_tbXNuQ.mp4?sig=07378cb7623b0267a7a9e17400627c7841fb05b1&token=%7B%22authorization%22%3A%7B%22forbidden%22%3Afalse%2C%22reason%22%3A%22%22%7D%2C%22clip_uri%22%3A%22https%3A%2F%2Fproduction.assets.clips.twitchcdn.net%2FAT-cm%257Cm_zLbwEfyR5vNQz_tbXNuQ.mp4%22%2C%22device_id%22%3A%22387a2fad6dc153a7%22%2C%22expires%22%3A1656379056%2C%22user_id%22%3A%22117653797%22%2C%22version%22%3A2%7D"
                }
                className="twitch-clip"
                controls
                autoPlay
                loop
                muted
              ></video>
            </Fade>
          </div>
        </div>
        <div className="p-col-12 p-md-6" style={{ backgroundColor: "#818181" }}>
          <div
            style={{
              color: "white",
              fontSize: "1.5vw",
              width: "90vw",
              maxWidth: "500px",
              margin: "0 auto 0 auto",
            }}
          >
            <div
              style={{
                color: "white",
                padding: "10vh 0 10vh 0vw",
                fontSize: "20px",
              }}
            >
              <div>I'm always adding things to my toolbox</div>
              <div>
                Constant learning keeps me on my toes, and keeps my projects up
                to date
              </div>
              {/* <div>(and the latest updates to languages & frameworks)</div> */}
            </div>
            <Fade>
              <div className="p-grid" style={{ textAlign: "center" }}>
                <div className="tech-icon p-col-6 p-lg-3">
                  <img
                    src={Vue}
                    alt="Vue"
                    style={{ width: "20vw", maxWidth: "100px" }}
                  />
                </div>
                <div className="tech-icon p-col-6 p-lg-3">
                  <img
                    src={Python}
                    alt="python"
                    style={{ width: "20vw", maxWidth: "100px" }}
                  />
                </div>
                <div className="tech-icon p-col-6 p-lg-3">
                  <img
                    src={ReactLogo}
                    alt="react"
                    style={{ width: "20vw", maxWidth: "100px" }}
                  />
                </div>
                <div className="tech-icon p-col-6 p-lg-3">
                  <img
                    src={Dotnet}
                    alt="Dotnet / C#"
                    style={{ width: "20vw", maxWidth: "100px" }}
                  />
                </div>
              </div>
            </Fade>
            <div style={{ display: "flex", alignContent: "center" }}>
              <img
                src={Toolbox}
                alt="toolbox"
                style={{
                  height: "40vh",
                  margin: "0 auto 0 auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
