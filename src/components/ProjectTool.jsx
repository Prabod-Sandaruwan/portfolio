import React from 'react'
import './ProjectTool.css'

function ProjectTool(props) {
  return (
    <div className='project_tool_div'>
      <img src={props.img} alt={`${props.name} icon`} loading="lazy" />
      <p className="project_tool_name">{props.name}</p>
    </div>
  )
}

export default ProjectTool