import React from 'react'
import '../style/Project.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Projects() {
    return (
        <div className="Projects">
            <Nav page={"Nav ProjectsNav"}></Nav>
            <h1 className="projectTitle">Projects</h1>
            <Footer page={'Footer ProjectsFooter'}></Footer>
        </div>
    )
}
