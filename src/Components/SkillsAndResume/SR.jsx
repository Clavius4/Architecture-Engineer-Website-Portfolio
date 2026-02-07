import React from 'react'
import './SR.css'
import { Skills } from '../../SR'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import Resume from '../../Assets/Resume/Resume.pdf'
const SR = () => {
    
    return (
      <>
      <div className="sr pad space">
          <div className="left">
              <ul className='skills' on>
                  {Skills.map((skill, i) => {
                      return (
                          <li key={i}>
                                <h4>{skill.name}</h4>
                              <CircularProgressbar value={skill.percent} text={`${skill.percent}%`}  styles={buildStyles({
                                pathColor:'#2c2724',
                                textColor: '#2c2724',
                                pathTransitionDuration: 1,

                              })}/>
                          </li>
                      )
                  })}
              </ul>
              <motion.svg
                  initial={{ left: '-7rem', bottom:'-4rem' }}
                  whileInView={{ left: '5rem', bottom: '7rem' }}
                  transition={{type:'spring', duration: 1.4}}
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
</motion.svg>
          </div>
          <div className="right">
              <h3>If you find that interesting</h3>
              <a href={Resume} download="Resume" target='_blank'  rel='noreferrer'>
                <button className='btn'>Download My Resume</button>
              </a>
                    <motion.svg
                  initial={{ right: '-7rem', bottom:'-4rem' }}
                  whileInView={{ right: '9rem', bottom: '7rem' }}
                  transition={{type:'spring', duration: 1.4}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-text-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
</motion.svg>
          </div>
    </div>
      </>
  )
}

export default SR