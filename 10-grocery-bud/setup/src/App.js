import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditIt] = useState(null)
  const [alert, setAlert] = useState({show: false, message: '', type: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return <section className='section-center'>
    <form action="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert/>}
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input type="text" className='grocery' placeholder='example: Eggs' value={name} onChange={(e) => setName(e.target.value)}/>
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>
    </form>
    <div className='grocery-container'>
      <List/>
      <button className='clear-btn'>Clear Items</button>
    </div>
  </section>
}

export default App
