import React from 'react'
import { GrLinkedin } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import './Header.css'
const HeaderSocials = () => {
    return (
        <div className='headersocials'>
            <a href="https://www.linkedin.com" target="_blank"><GrLinkedin /></a>
            <a href="https://www.github.com" target="_blank"><BsGithub /></a>
        </div>

    )
}

export default HeaderSocials