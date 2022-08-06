import React from 'react'
import ProjectsById from '../ProjectsById/ProjectsById'

function Card(subject) {

  const handleClick = () => {

  }
  return (
    <div className='tc bg-light-green dib pa3 ma2 grow bw2 shadow-5'>
      <img className='br-100 h3 w3 dib' src={subject.image} />
      <div>
        {/* <h2> {subject.name} </h2>
        <p>{subject.description}</p> */}
        <ProjectsById projectId={subject.id}/>
      </div>
    </div>
  )
}

export default Card