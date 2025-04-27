import React, {useState} from 'react'
import Model from './Model'

function AddNewTodo() {
  const [showModel, setShowModel] = useState(false)
  return (
    <div className='addnewtodo'>
      <button>+ New Todo</button>
      <Model showModel={showModel} setShowModel={setShowModel} >
        <div>jjjj</div>
      </Model>
    </div>
  )
}

export default AddNewTodo
