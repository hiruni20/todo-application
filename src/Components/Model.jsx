import React from 'react'
import { useRef } from 'react'

function Model({children, showModel, setShowModel}) {
    const modelRef = useRef()

    const closeModel = (e) => {
        if (e.target === modelRef.current) {
            setShowModel(false)
        }
    }
  return (
    showModel &&
    <div className='Model' onClick={closeModel}>
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default Model