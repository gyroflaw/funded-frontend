import React from 'react'
import { useParams } from 'react-router-dom';
import ProjectsById from '../ProjectsById/ProjectsById'

function ViewClickedProject() {
  const { id } = useParams()
  return (
    <div><ProjectsById projectId={id}/></div>
  )
}

export default ViewClickedProject