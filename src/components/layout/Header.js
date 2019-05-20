import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div id="header">
            <ul>
                <li>Matt Hughes</li>
                
                <li>925 963 3487</li>
                
                <li>matthew.lhCA@gmail.com</li>
            </ul>
        </div>  
        <div id="navbar">
            <br></br><br></br>
            <div id="table">
            <ul>
                <li><Link to="/">about</Link></li>
                
                <li><Link to="/projects">projects</Link></li>
                
                <li><Link to="/contact">contact</Link></li>
            </ul>
            </div>
        </div>
    </header>
  )
}
