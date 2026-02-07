import React from 'react'
import './Loading.css'
import { motion } from 'framer-motion'
const Loading = ({hide}) => {
    const transition = {type:'tween', duration: 5, delay: 1}
  return (
      <div className={`loading ${hide}`}>
          <div className="cont">
              
          <div className="screen">
                  <motion.div
                      initial={{ width: '10%' }}
                      animate={{ width: '70%' , marginRight:'10px'}}
                      transition={{...transition}}
                      className="left">
                <h1>Damian</h1>
              </motion.div>
                  <motion.div
                      initial={{ width: '9%' }}
                      animate={{ width: '53%' }}
                      transition={{...transition}}
                      className="right">
                  <h1>Lessi</h1>
              </motion.div>  
          </div>
          <div className="bar">
                  <motion.div
                      initial={{ transform: 'translateX(-100%)' }}
                      animate={{ transform: 'translateX(0%)' }}
                      transition={{...transition, duration: 6, delay: 4}}
                      className="progress"></motion.div>
          </div>
          </div>
    </div>
  )
}

export default Loading