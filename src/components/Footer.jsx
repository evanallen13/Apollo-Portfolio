import React from 'react'
import '../style/Footer.css'
import Git from '../../static/imgs/Contacts/github.png'
import Call from '../../static/imgs/Contacts/call.png'
import Gmail from '../../static/imgs/Contacts/gmail.png'
import Resume from '../../static/imgs/Contacts/resume.png'

export default function Footer(props) {
    return (
        <div className={props.page}>
            <img src={Git} alt="Github"/>
            <img src={Call} alt="Phone"/>
            <img src={Gmail} alt="Gmail"/>
            <img src={Resume} alt="Resume"/>
        </div>
    )
}
