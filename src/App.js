import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import './App.css';
import Header from './components/layout/Header'
import Contact from './components/pages/Contact'
import me from './me.jpg';



function App() {
 
  return (
    <Router>
    <div className="App">
    <Header />
    <Route exact path="/" render={props => (
      <React.Fragment>
        <div className="grid-container">
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>  
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"><img src={me} alt="cam"/></div>  
                    <div className="grid-item">
                        <h3>About Me</h3>
                        <p>Hey there, I am a student currently enrolled at Las Positas College and also working as an 
                            apprentice working on  <em>automation</em>  and  <em>development</em>  at Kaiser Permanente in their IT department. I have always been 
                            interested in computer science and IT. I have a very <em>focused work ethic</em> and am always <em>thinking ahead</em>. 
                            I work to solve problems quickly and efficiently whether it be on a project or in the workplace. 
                            I am an Eagle Scout and hold myself true to the values associated. Aside from education and work, 
                            I enjoy volunteering in outdoor parks.</p>
                    </div>
                    <div className="grid-item"></div>
                    
                  </div>
      </React.Fragment>
    )} />
    <Route path="/Contact" component={Contact} />
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>


        
        
        

      
    </div>
  </Router>
  );
}


export default App;
