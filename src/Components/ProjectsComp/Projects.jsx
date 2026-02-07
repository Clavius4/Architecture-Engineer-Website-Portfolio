import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import { ProjectsData } from '../../ProjectsData'
import { motion } from 'framer-motion'
const Projects = () => {
    const transition = {type:'spring', duration: 3}
  return (
      <div className="pad projects">
          {ProjectsData.map((project) => {
              return (
                  <motion.div
                      initial={{ transform: 'translateY(60%)', opacity: 0 }}
                      whileInView={{ transform: 'translateY(0%)', opacity: 1,filter: 'drop-shadow(2px 3px 22px rgb(69, 69, 69))' }}
                      whileHover={{transform: 'translateY(0px) scale(1.02)'}}
                      transition={{...transition}}
                      className={`project ${project.margin ? 'marg' : ''}`} key={project.id} data-id={project.name}>
                      <img className={`${project.name === 'Exhibition Hall' ? 'bright' : ""}`} src={project.shot1} alt={project.name} />
                      <div className={`back ${project.name ==='Pavilion For Future Science' ? 'moveLeft': '' }`}></div>
                      <div className={`details ${project.name ==='Pavilion For Future Science' ? 'moveLeft': '' }`}>
                          <h3 className='name'>{project.name}</h3>
                          <p>{project.concept.slice(0, 250).trim()}{project.concept.length > 250 ? '...' :''}</p>
                          <Link to={`/Architecture-Engineer-Portfolio-Website/project/${project.name}`} className='btn'>Learn More</Link>
                      </div>
                  </motion.div>
              )
          })}
      </div>
  )
}

export default Projects