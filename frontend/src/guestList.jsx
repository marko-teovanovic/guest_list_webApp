import { useState } from 'react'

function guestList() {
  const [message, setMessage] = useState('Guest list web app')

  return (
    <div>
      <h1>Guest list</h1>
      <p>{message}</p>
    </div>
  )
}

export default guestList
