import styles from './inputBar.module.css'
import plus from '../../assets/plus.svg'

const InputBar = () => {
  return (
    <div className='input-container'>
      <input
        type='text'
        name='todoInput'
        className={styles.input}
        placeholder='Add a new task'
      />

      <button className={styles.createButton}>
        <span className='button-text'>Create</span>
        <img src={plus} alt='' />
      </button>
    </div>
  )
}
export default InputBar
