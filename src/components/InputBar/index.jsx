import styles from './inputBar.module.css'
import plus from '../../assets/plus.svg'

const InputBar = () => {
  const handleSubmit = (e) => {
    //* Prevent page from reloading
    e.preventDefault()
    console.log('reload prevented')
  }

  return (
    <div className={styles.inputFormContainer}>
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <input
          type='text'
          name='todoInput'
          className={styles.input}
          placeholder='Add a new task'
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
