import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../sources/me.jpeg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h1>VARUN CHANDA</h1>
                <h5 className='light-text'>Student</h5>
                <CTA />
                <HeaderSocials />
                <a href="#skills" className='scrolldown'>Scroll Down</a>
                <div className='me'>
                    <img src={ME} alt="me" />
                </div>
            </div>
        </header>

    )
}

export default Header