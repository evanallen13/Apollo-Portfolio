import React from 'react'
import '../style/Nav.css'
import { Link } from "gatsby"

export default function Nav(props) {
    return (
        <div className={props.page}>
                <Link to="/" style={{textDecoration : 'none'}}>
                    <h1 className="navLink">Home</h1>
                </Link>
                <Link to="/About" style={{textDecoration : 'none'}}>
                    <h1 className="navLink">About</h1>
                </Link>
                <Link to="/Projects" style={{textDecoration : 'none'}}>
                    <h1 className="navLink">Projects</h1>
                </Link>
        </div>
    )
}
