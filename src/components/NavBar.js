import React from 'react'
import { Link } from 'react-router-dom'; 

export const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">University</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li class="nav-item active">
        <Link className="nav-link" to="/subject">Subjects</Link>
        </li>
        <li class="nav-item">
         <Link className="nav-link" to="/students">Students</Link>
        </li>
        <li class="nav-item">
         <Link className="nav-link" to="/teacher">Teachers</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
