import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import React from 'react'

function LocationPin(text) {
  return (
    <div className='pin'>
      <Icon icon={locationIcon} className="in-icon" />
      <p className='pin-text'>{text}</p>
    </div>
  )
}

export default LocationPin