import React from 'react'
import '../style/Footer.css'
import Git from '../../static/imgs/Contacts/github.png'
import Call from '../../static/imgs/Contacts/call.png'
import Gmail from '../../static/imgs/Contacts/gmail.png'
import Resume from '../../static/imgs/Contacts/resume.png'
import ResumePdf from '../../static/Resume.pdf'

export default function Footer(props) {
    return (
        <div className={props.page}>
            <a href="https://github.com/evanallen13" target="_blank" rel="noopener noreferrer"><img src={Git} alt="Github"/></a>
            <a href="tel:7142642562"><img src={Call} alt="Phone"/></a>
            <a href="mailto:evanallen13@gmail.com"><img src={Gmail} alt="Gmail"/></a>
            <a href={ResumePdf} download="Evan_Allen_Resume"><img src={Resume} alt="Resume"/></a>
        </div>
    )
}
