import React, { useState } from 'react'
import Model from './Model'

function AddNewTodo() {
  const [showModel, setShowModel] = useState(false)
  return (
    <div className='addnewtodo'>
      <div className="btn">
        <button onClick={() => setShowModel(true)}>+ New Todo</button>
      </div>
      <Model showModel={showModel} setShowModel={setShowModel} >
        <div>jjjj</div>
        <button onClick={() => setShowModel(false)}>Hide</button>
      </Model>
    </div>
  )
}

export default AddNewTodo
