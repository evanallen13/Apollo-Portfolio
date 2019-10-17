import React from 'react'
import '../style/About.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div className="About">
            <Nav page={'Nav AboutNav'} />
            <h1 className="aboutTitle">About</h1>
            <h4 className="aboutSubTitle">Who Am I?</h4>
            <p className="aboutP">simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h4 className="aboutSubTitle">Who Am I?</h4>
            <p className="aboutP">simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h4 className="aboutSubTitle">Who Am I?</h4>
            <p className="aboutP">simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Footer page={'Footer AboutFooter'}></Footer>
        </div>
    )
}
