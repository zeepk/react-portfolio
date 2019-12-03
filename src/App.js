import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import me from "./me.jpg";

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
                    <img src={me} alt="cam" />
                  </div>
                  <div className="grid-item">
                    <h3>About Me</h3>
                    <div id="aboutMe">
                      <p>
                        Hey there, my name is <em>Matthew Hughes</em> and I am
                        working as an apprentice with automation and development
                        at Kaiser Permanente in their IT department. I am also a
                        student enrolled in community college. I have always
                        been interested in computer science and IT. I have a
                        very and am always thinking ahead. I work to solve
                        problems proactively and efficiently whether it be on a
                        project or in the workplace. I am an Eagle Scout and
                        hold myself true to the values associated. Aside from
                        education and work, I enjoy volunteering in outdoor
                        parks. <br />
                        <br /> Technologies I am familiar with: <br />
                        C++, Python (+Django), C#, Java, Html/Css, JS (+React)
                      </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
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
