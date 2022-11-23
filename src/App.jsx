import { useState } from 'react'
import Header from './components/Header'
import InputBar from './components/InputBar'
import TaskList from './components/TaskList'
import './global.css'

function App() {
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

  //* Set completed task by id
  const onToggleTaskStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='app-container'>
      <Header />
      <main className='main-container'>
        <InputBar onAddTodo={addTodo} />
        <TaskList
          todos={todos}
          // setTodos={setTodos}
          toggleStatus={onToggleTaskStatus}
        />
      </main>
    </div>
  )
}

export default App
