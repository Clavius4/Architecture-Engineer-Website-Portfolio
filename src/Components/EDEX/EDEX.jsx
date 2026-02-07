import React, { useState } from 'react'
import './EDEX.css'
import { eddata, exdata } from '../../EDEXData'
import { motion } from 'framer-motion'
const EDEX = () => {
    const [appear, setAppear] = useState(false)
    const [secAppear, setSecAppear] = useState(false)
    const [activeate, SetActivate] = useState('')
    const [secActiveate, setSecActivate] = useState('active')

    const [showMore, setShowMore] = useState(false)
    const [height, setHeight] = useState('')
    const [showText, setShowText] = useState('Show More')
    const transition = {type:'spring', duration: 3}
    const appearanceHandle = () => {
        if (!secAppear) {
            setAppear(false)
            setSecAppear(true)
            setSecActivate('active')
            SetActivate('')
        }
    }
    const secAppearanceHandle = () =>{
        if (!appear) {
            setAppear(true)
            setSecAppear(false)
            SetActivate('active')
            setSecActivate('')
        }
    }

    const showFullHeight = () => {
        if (!showMore) {
            setShowMore(true)
            setHeight('height')
            setShowText('Show Less')
        } else {
            setShowMore(false)
            setHeight('')
            setShowText('Show More')
        }
    }
    return (
        <div className={`pad edex ${height}`}>
            <div className="responsiveBox">
                <svg onClick={secAppearanceHandle} className='icon res bi bi-mortarboard-fill' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                </svg>
            <svg onClick={appearanceHandle} className='icon res bi bi-briefcase-fill' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
</svg>
            </div>
            <div className={`left ${activeate}`}>
                {
                    eddata.map((ed, i) => {
                       return(
                           <motion.div
                               initial={{ transform: 'translateY(100%)', opacity: 0 }}
                               whileInView={{ transform: 'translateY(0%)', opacity: 1 }}
                               transition={{...transition}}
                               className='education' key={i}>
                            <p className='text'>{ed.education}</p>
                            <p className='sub'>{ed.sub}</p>
                            <p className='date'>{ed.date}</p>
                        </motion.div>
                           )
                    })
                }
            </div>
            <div className="divider">
                <motion.svg
                    initial={{ transform: 'rotateY(-90deg)' }}
                    whileInView={{ transform: 'rotateY(0deg)'}}
                    transition={{...transition}}
                    className='icon bi bi-briefcase-fill' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
</motion.svg>
                <motion.svg
                    initial={{ transform: 'translateX(-100%) rotateY(-90deg)' }}
                    whileInView={{ transform: 'translateX(-100%) rotateY(0deg)'}}
                    transition={{...transition}}
                    className='icon bi bi-mortarboard-fill' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                </motion.svg>
                <div className="circles">
                    {
                        exdata.map((ed,i) => {
                            return (
                                <motion.div
                                initial={{ transform: 'translateY(100%) translateX(-50%)', opacity: 0 }}
                                whileInView={{ transform: 'translateY(0%) translateX(-50%) ' ,opacity: 1 }}
                                transition={{...transition}}
                                className="circle" key={i}></motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`right ${secActiveate}`}>
                {
                    exdata.map((ex, i) => {
                        return (
                            <motion.div
                                initial={{ transform: 'translateY(100%)', opacity: 0 }}
                               whileInView={{ transform: 'translateY(0%)', opacity: 1 }}
                               transition={{...transition}}
                                className='experience' key={i}>
                                <p className='text'>{ex.experience}</p>
                                <p className='sub'>{ex.sub}</p>
                                <p className='date'>{ex.date}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
            <motion.div
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 1 }}
                transition={{ ...transition }}
                onClick={showFullHeight}
                className="show">
                <p>{showText}</p>
            </motion.div>
        </div>
    )
}

export default EDEX