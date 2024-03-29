import React from "react";
import Fade from "react-reveal/Fade";
import Toolbox from "../images/toolbox.png";
import Python from "../images/python.png";
import Dotnet from "../images/dotnet-logo.png";
import ReactLogo from "../images/react.svg";
import Vue from "../images/vue.png";
import Twitch from "../images/twitch.png";

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
              <img
                style={{
                  width: "90vw",
                  maxWidth: "90%",
                  paddingBottom: "10vh",
                }}
                src={Twitch}
                alt="twitch screenshot"
                className="twitch-clip"
              ></img>
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
