import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
return (
<nav className="navbar">
<div className="logo">PAHDS Connect</div>
<ul className="nav-links">
<li><Link to="/" className="hover:text-blue-600">Home</Link></li>
<li><Link to="/about" className="hover:text-blue-600">About</Link></li>
<li><Link to="/work" className="hover:text-blue-600">Our Work</Link></li>
<li><Link to="/badges" className="hover:text-blue-600">Badges</Link></li>
<li><Link to="/volunteer" className="hover:text-blue-600">Volunteer</Link></li>
</ul>
</nav>
)
}

