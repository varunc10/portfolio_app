import React from 'react'
import './Courses.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Portfoilio = () => {
    return (
        <section id='Courses'>
            <h2>Courses I have Done/am Doing</h2>
            <div className='container courses_container'>
                <article className='course'>
                    <div className="course_head">
                        <BsFillPatchCheckFill />
                        <h3>Introduction to C++ Coding Ninjas</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea!</h5>
                    </div>
                    <button className='button_courses'>
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">Go to Course</a>
                    </button>
                </article>
                <article className='course'>
                    <div className="course_head">
                        <BsFillPatchCheckFill />
                        <h3>Programming For Everybody by Michingan University On Coursera</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea!</h5>
                    </div>
                    <button className='button_courses'>
                        <a href="https://www.coursera.org/account/accomplishments/verify/SGH29VP6Y7QS">Go to Course</a>
                    </button>
                </article>
                <article className='course'>
                    <div className="course_head">
                        <BsFillPatchCheckFill />
                        <h3>Complete Interview Preparation GeeksforGeeks</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea!</h5>
                    </div>
                    <button className='button_courses'>
                        <a href="https://practice.geeksforgeeks.org/batch/cip-1/">Go to Course</a>
                    </button>
                </article>
                <article className='course'>
                    <div className="course_head">
                        <BsFillPatchCheckFill />
                        <h3>Finance for Non-Financial Professionals</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea!</h5>
                    </div>
                    <button className='button_courses'>
                        <a href="https://www.coursera.org/account/accomplishments/verify/Y9P76UMCSG3J">Go to Course</a>
                    </button>
                </article>
                <article className='course'>
                    <div className="course_head">
                        <BsFillPatchCheckFill />
                        <h3>The Web Developer Bootcamp 2022</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ea!</h5>
                    </div>
                    <button className='button_courses'>
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">Go to Course</a>
                    </button>
                </article>
            </div>
        </section>
    )
}

export default Portfoilio