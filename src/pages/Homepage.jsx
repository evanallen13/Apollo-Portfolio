import React from 'react'
import '../style/homepage.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Homepage() {
    return (
        <div className="Homepage">
            <Nav page={'Nav HomepageNav'} />
            <h1>Evan A//en</h1>
            <h4>(714) 264-2562</h4>
            <h4>evanallen13@gmail.com</h4>
            <h4>github.com/evanallen13</h4>
            <Footer page={'Footer HomepageFooter'}></Footer>
        </div>
    )
}
