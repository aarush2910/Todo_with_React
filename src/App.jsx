import React from 'react'
import NavBar from "./components/NavBar"
import Carousel from './components/Carousel'
import TodoSection from './components/TodoSection'
import AddTaskModal from './components/AddTaskModal'

import { useState } from 'react' // import useState hook to manage state 
function App() {
  const [isOpen , setIsOpen] = useState(false) 

  function OpenModal()
  {

setIsOpen(true)
  }

  function CloseModal()
  {
    setIsOpen(false)
  }
 //(( const [count, setCount] = useState(0); // initialize state variable count with initial value 0

  // array destructuring to get the state variable and the function to update it 
  //where usestate is a hook(function) it returns an array with two elements: the current state value and a function setcount to update it.)))///

  return (
    <div>
      {isOpen && <AddTaskModal CloseModal={CloseModal}/>}

      <NavBar />
      <Carousel />
      <TodoSection openModal={OpenModal} />
     
    </div>
  )
}


export default App; 
