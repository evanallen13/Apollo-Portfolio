import React from 'react'
import '../style/Homepage.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Homepage() {
    return (
        <div className="Homepage" style={{textAlign : 'center'}}>
            <Nav page={'Nav HomepageNav'} />
            <h1 className='Title'>Evan A//en</h1>
            <h4 className='ContactInfo'>(714) 264-2562</h4>
            <h4 className='ContactInfo'>evanallen13@gmail.com</h4>
            <h4 className='ContactInfo'>github.com/evanallen13</h4>
            <Footer page={'Footer HomepageFooter'}></Footer>
        </div>
    )
}

/* 
    dark blue : #2e364f
    light blue : #2d5d7c
    orange : #ef5939
    white : #f3f0e2

*/
