import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Uses from './components/pages/Uses';
import me from './me.jpg';
import twitterIcon from './twitterIcon.png';
import linkedinIcon from './linkedinIcon.png';
import githubIcon from './githubIcon.svg';
import ReactGA from 'react-ga';

function initializeReactGA() {
	ReactGA.initialize('UA-160538981-1');
	ReactGA.pageview('/homepage');
}
initializeReactGA();

function App() {
	return (
		<React.Fragment>
			<Router>
				<div className="App">
					<Header />
					<Route
						exact
						path="/"
						render={(props) => (
							<React.Fragment>
								<br />
								<br />
								<div className="grid-container">
									<div className="grid-item">
										<img src={me} alt="Matt Hughes" />
									</div>
									<div className="grid-item">
										<div id="aboutMe">
											{/* I am continuing my education in computer science */}
											{/* <p>
                        Hey there! My name is <em>Matthew Hughes</em> and I am
                        an enthusiastic, user-focused full stack developer and
                        engineer.  <br />
                        <br /> Technologies I am proficient in: <br />
                        C++, Python (+Django), C#, Java, Html/Css, JS (+React)
                      </p> */}
											<h2>Hey! I'm Matt Hughes ~</h2>
											<h5>
												I'm an enthusiastic, customer-focused full stack
												developer. I've worked on many personal and professional
												projects, always aiming for the <i>perfect</i> user
												experience.
											</h5>
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
												href="https://github.com/zeepk"
												rel="noopener noreferrer"
												target="_blank"
											>
												<img
													className="social"
													src={githubIcon}
													width="60"
													alt="Github"
												/>
											</a>
											<a
												href="https://www.linkedin.com/in/matthughes-dev/"
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
											{/* <a
                        href="https://drive.google.com/file/d/1ox_k2bmHy-TqKIaXwmysbkN0rrDTlkFF/view?usp=sharing"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <h6>Click here for my resume!</h6>
                      </a> */}
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
