import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Uses from "./components/pages/Uses";
import me from "./me.jpg";
import twitterIcon from "./twitterIcon.png";
import linkedinIcon from "./linkedinIcon.png";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <br />
                <br />
                <div className="grid-container">
                  <div className="grid-item">
                    <img src={me} alt="Matt Hughes" />
                  </div>
                  <div className="grid-item">
                    <h3>About Me</h3>
                    <div id="aboutMe">
                      <p>
                        Hey there, my name is <em>Matthew Hughes</em> and I am
                        working as an apprentice with automation and development
                        at Kaiser Permanente in the IT Operations department. I
                        am also a student enrolled in community college. I have
                        always been interested in computer science and IT. I
                        have a very focused work ethic and am always thinking
                        ahead. I work to solve problems proactively and
                        efficiently whether it be on a project or around the
                        workplace. I am an Eagle Scout and hold myself true to
                        the values associated. Aside from education and work, I
                        enjoy volunteering in outdoor parks. <br />
                        <br /> Technologies I am proficient in: <br />
                        C++, Python (+Django), C#, Java, Html/Css, JS (+React)
                      </p>
                      <a
                        href="https://twitter.com/matthughes2112"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="social"
                          src={twitterIcon}
                          width="50"
                          alt="Twitter"
                        />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/matthew-hughes-62795594/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="social"
                          src={linkedinIcon}
                          width="50"
                          alt="LinkedIn"
                        />
                      </a>
                      <br />
                      <a
                        href="https://docs.google.com/document/d/1LPr_gMxdj0CbRf6HNA6ULWlNbkv954gObCgyODMJtCM/edit?usp=sharing"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <h6>Click here for my resume!</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Uses" component={Uses} />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
            rel="stylesheet"
          ></link>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
