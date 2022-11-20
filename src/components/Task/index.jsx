import styles from './task.module.css'
import circle from '../../assets/circle.png'
import trashIcon from '../../assets/trashIcon.png'

const Task = () => {
  return (
    <div>
      <div className={styles.taskContainer}>
        <div className='option'>
          <img src={circle} alt='toggle' />
        </div>
        <p id='todoText' className={styles.todoText}>
          Create a new task
        </p>
        <img className={styles.trash} src={trashIcon} alt='Delete Task' />
      </div>
    </div>
  )
}
export default Task
