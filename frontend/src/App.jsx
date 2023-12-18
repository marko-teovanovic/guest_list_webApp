import React, { useState, useEffect } from 'react'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080')
        console.log(response.data);

      } catch (error) {
        console.error(error);
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>GUEST LIST</h1>
      <button className='Create'>Create new</button>
    </div>
  )

}


export default App
