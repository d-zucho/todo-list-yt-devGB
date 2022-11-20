import Header from './components/Header'
import InputBar from './components/InputBar'
import TaskList from './components/TaskList'
import './global.css'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-container'>
        <InputBar />
        <TaskList />
      </main>
    </div>
  )
}

export default App
