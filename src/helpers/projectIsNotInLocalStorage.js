import React from 'react'

const projectIsNotInLocalStorage = () => {
  return !localStorage.getItem('projects') ? true : false
}

export default projectIsNotInLocalStorage