import Header from './components/Header'
import InputBar from './components/InputBar'
import './global.css'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-container'>
        <InputBar />
      </main>
    </div>
  )
}

export default App
