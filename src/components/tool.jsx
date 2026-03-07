import React from 'react'
import './tool.css'

function tool(props) {
  return (
    <div className='tool_div'>
      <img src={props.img} alt={`${props.name} icon`} loading="lazy" />
        <p className="tool_name">{props.name}</p>
    </div>
  )
}

export default tool