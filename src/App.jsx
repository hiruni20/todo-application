import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Mainf from './Components/Mainf'
import User from './Components/User'
import AddNewTodo from './Components/AddNewTodo'
import Calender from './Components/Calender'
import Projects from './Components/Projects'
import Todos from './Components/Todos'
import EditTodoForm from './Components/EditTodoForm'

function App() {
 

  return (
    <div className='App'>
     <Sidebar>
        <User/>
        <AddNewTodo/>
        <Calender/>
        <Projects/>
     </Sidebar>
     <Mainf>
        <Todos/>
        <EditTodoForm/>
     </Mainf>
    </div>
  )
}

export default App
