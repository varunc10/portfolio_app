import React from 'react'
import './Nav.css'
import { RiHome6Fill } from 'react-icons/ri'
import { ImUser } from 'react-icons/im'
import { MdWork } from 'react-icons/md'
import { BsBookmarkFill } from 'react-icons/bs'
import { GiShare } from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav >
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome6Fill /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><ImUser /></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdWork /></a>
            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BsBookmarkFill /></a>
            <a href="#socials" onClick={() => setActiveNav('#socials')} className={activeNav === '#socials' ? 'active' : ''}><GiShare /></a>
        </nav>

    )
}

export default Nav