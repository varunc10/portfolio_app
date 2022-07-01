import React from 'react'
import CV from '../../sources/resume varun final - Copy.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='button'>Download CV</a>
            <a href="socials" className='button button-primary'>Contact</a>
        </div>
    )
}

export default CTA