import React from 'react'
import "./index.scss";

function Project({ projects,idx }) {
    return (
        <div className='projects'>

            {
                projects.map((project, i) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a href={project.link} target='_blank' className={`project _${i + idx}`} key={i} rel="noreferrer" >
                        <img src={project.img} alt="" />
                        <div>{project.desc}</div>
                        <span>{project.title}</span>
                    </a>
                ))
            }
        </div>
    )
}

export default Project
