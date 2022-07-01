import React from 'react'
import './Skills.css'
import { AiFillCheckCircle } from 'react-icons/ai'

const Skills = () => {
    return (
        <section id='skills'>
            <h5>My Skills</h5>
            <h2>proficiencies</h2>
            <div className="conatiner skill_container">
                <div className="skills_mine">
                    <h3>Development</h3>
                    <div className="skill_content">
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>HTML</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>CSS</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>Javascipt</h4>
                            </div>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>React</h4>
                            </div>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>Git</h4>
                            </div>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>Bootstrap</h4>
                            </div>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>
                {/*one card*/}
                <div className="skills_mine">
                    <h3>DSA and Other</h3>
                    <div className="skill_content">
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>Data Structures and Algorithms</h4>
                            </div>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>C++</h4>
                            </div>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>C</h4>
                            </div>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>Python</h4>
                            </div>
                            <small className='text-light'>Beginner</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>Accounting</h4>
                            </div>
                            <small className='text-light'>Beginner</small>
                        </article>
                        <article className='skill_details'>
                            <AiFillCheckCircle />
                            <div>
                                <h4>Japanese</h4>
                            </div>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Skills