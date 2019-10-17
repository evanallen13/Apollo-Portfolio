import React from 'react'
import '../style/Nav.css'
import {Link} from "react-router-dom";

export default function Nav(props) {
    return (
        <div className={props.page}>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/About" className="navLink">About</Link>
            <Link to="/Projects" className="navLink">Projects</Link>
        </div>
    )
}
