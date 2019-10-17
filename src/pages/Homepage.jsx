import React from 'react'
import '../style/homepage.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Homepage() {
    return (
        <div className="Homepage">
            <Nav page={'Nav HomepageNav'} />
            <h1 className='Title'>Evan A//en</h1>
            <h4 className='ContactInfo'>(714) 264-2562</h4>
            <h4 className='ContactInfo'>evanallen13@gmail.com</h4>
            <h4 className='ContactInfo'>github.com/evanallen13</h4>
            <Footer page={'Footer HomepageFooter'}></Footer>
        </div>
    )
}
