import { useState } from 'react'
import Header from './components/Header'
import InputBar from './components/InputBar'
import TaskList from './components/TaskList'
import './global.css'

function App() {
  let tasks = [
    {
      id: 1,
      text: 'Create a new task',
      completed: false,
    },
    {
      id: 2,
      text: 'Create a new task',
      completed: false,
    },
    {
      id: 3,
      text: 'Create a new task',
      completed: false,
    },
  ]

  const [todos, setTodos] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)

  //* Add new task function
  const addTodo = (todoText) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: todoText,
        completed: false,
      },
    ])
  }

  //* change completed state
  const handleClick = () => {
    setIsCompleted(!isCompleted)
  }

  return (
    <div className='app-container'>
      <Header />
      <main className='main-container'>
        <InputBar />
        <TaskList
          todos={todos}
          // setTodos={setTodos}
          // setCompleted={handleClick}
        />
      </main>
    </div>
  )
}

export default App
