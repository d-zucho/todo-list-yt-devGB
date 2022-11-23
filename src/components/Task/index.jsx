import styles from './task.module.css'

import check from '../../assets/check.svg'
import circle from '../../assets/circle.svg'
import { CgTrash } from 'react-icons/cg'

const Task = ({ todo, toggleStatus }) => {
  return (
    <div>
      <div className={styles.taskContainer}>
        <div onClick={() => toggleStatus(todo.id)} className={styles.option}>
          {/* if task is completed, show check image, if not, show empy circle */}
          <img src={todo.completed ? check : circle} alt='completed' />
        </div>
        <p id='todoText' className={`${styles.todoText}`}>
          {todo.text}
        </p>

        <CgTrash size={'1.2em'} className={styles.trash} />
      </div>
    </div>
  )
}
export default Task
