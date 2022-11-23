import styles from './inputBar.module.css'
import plus from '../../assets/plus.svg'
import { useState } from 'react'

const InputBar = ({ onAddTodo }) => {
  const [title, setTitle] = useState('')

  // ?? -- handle form submit
  const handleSubmit = (e) => {
    //* Prevent page from reloading
    e.preventDefault()

    //* Check if input is empty
    if (title.length > 0) {
      onAddTodo(title)
      // console.log(title)
      setTitle('')
    } else {
      alert('Please enter a task')
    }
  }

  //* Get input value and set it to state 'title'
  const handleSetTitle = (e) => {
    setTitle(e.target.value.trim())
  }

  return (
    <div className={styles.inputFormContainer}>
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <input
          type='text'
          name='todoInput'
          className={styles.input}
          placeholder='Add a new task'
          value={title}
          onChange={handleSetTitle}
        />
        <button type='submit' className={styles.createButton}>
          <div className={styles.buttonText}>
            <span className='spanText'>Create</span>
            <img className='' src={plus} alt='' />
          </div>
        </button>
      </form>
    </div>
  )
}
export default InputBar
