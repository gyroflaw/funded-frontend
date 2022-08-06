import React from 'react'
import Card from './Card'

function SearchList({ filteredSubjects }) {
  const filtered = filteredSubjects.map(subject => <Card key={subject.id} subject={subject} />)
  return (
    <div>{filtered}</div>
  )
}

export default SearchList