import React, { useEffect, useState } from 'react'
import './Home.css'
import { FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion'

import portfolioImage from '../../Assets/Images/portfolio-image.jpg'



const Home = () => {
    const [opened, setopened] = useState(false)
    const [status, setStatus] = useState('')
    const [date, setDate] = useState()
    useEffect(() => {
        let year = new Date();
        setDate(year.getFullYear())
    },[])
    const show = () => {
        if (!opened) {
            setStatus('active');
            setopened(true)
        } else {
            setStatus('')
            setopened(false)
        }
    }

    const hide = () => {
            setStatus('')
            setopened(false)
    }
    return (
        <div className='home' id='home'>
            <header>
                <FiMenu className='menu' onClick={show} style={{transform: 'scale(2.5)'}} />
                <ul className={`${status}`}>
                    <li onClick={hide}><a href="#home">Home</a></li>
                    <li onClick={hide}><a href="#edex">Education & Experience</a></li>
                    <li onClick={hide}><a href="#projects">Project</a></li>
                    <li onClick={hide}><a href="#SR">Skills & Resume</a></li>
                    <li onClick={hide}><a href="#contact">Contact Me</a></li>
                </ul>
            </header>
            <div className="top">
                <div className="left">
                    <div className="text">
                        <h1><span>Damian</span> Lessi</h1>
                        <p>Architecture Engineer</p>
                    </div>
                    <div className="info">
                        Hello, my name is Damian Lessi. I am {date - 2000} years old. Studied at the architecture department
                        of Ardhi University
                    </div>
                    <motion.div
                        initial={{ transform: 'translateY(100%)', opacity:0 }}
                        animate={{  transform: 'translateY(0%)',opacity:1}}
                        transition={{type:'spring', duration: 3}}
                        className="quote">
                        <q>As an architect,you design for the present, with an awareness of the past for a future which is essentially unknown</q>
                        <span>Norman Foster</span>
                    </motion.div>
                </div>
                <div className="right">
                    <div className="image">
                        <img src={portfolioImage} alt="Damian Lessi" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home