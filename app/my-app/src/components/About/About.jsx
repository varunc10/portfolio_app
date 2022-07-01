import React from 'react'
import './About.css'
import ME2 from '../../sources/me2.jpeg'
import { AiFillProject } from 'react-icons/ai'
import { GiBrain } from 'react-icons/gi'
import { AiFillGoogleCircle } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h2 >About Me</h2>
            <h5 className='text_left'>Currently in my final year of BTech at NSUT delhi</h5>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={ME2} alt="About ME" />
                    </div>

                </div>
                <div className="about_content">
                    <div className='about_cards'>
                        <article className='about_card'>
                            <AiFillProject className='about_icon' />
                            <h5>Projects</h5>
                            <small>Completed 15 minor and 2 major projects on Web Development</small>
                        </article>
                        <article className='about_card'>
                            <GiBrain className='about_icon' />
                            <h5>Skills</h5>
                            <small>Good proficiency in Data strucutres and Algorithms and frontend Web Development</small>
                        </article>
                        <article className='about_card'>
                            <AiFillGoogleCircle className='about_icon' />
                            <h5>Work Experience</h5>
                            <small>3 month internship under Google maps manager in sydney as a Web developer</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi at, distinctio culpa commodi iusto excepturi non neque atque quae explicabo deleniti odio nulla beatae modi quam soluta perspiciatis ratione tenetur tempore temporibus delectus maiores ipsum aut rerum. Aliquid, molestiae ex!
                    </p>

                    <a href="#socials" className='button button-primary'>Socials</a>
                </div>
            </div>
        </section>
    )
}

export default About