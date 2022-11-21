import styles from './task.module.css'
// import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'
import check from '../../assets/check.svg'
import circle from '../../assets/circle.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { CgTrash } from 'react-icons/cg'
import { useState } from 'react'

const Task = () => {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleClick = () => {
    setIsCompleted(!isCompleted)
  }

  return (
    <div>
      <div className={styles.taskContainer}>
        <div onClick={handleClick} className={styles.option}>
          {/* if task is completed, show check image, if not, show empy circle */}
          <img src={isCompleted ? check : circle} alt='completed' />
        </div>
        <p id='todoText' className={`${styles.todoText}`}>
          Create a new task
        </p>

        <CgTrash size={'1.2em'} className={styles.trash} />
      </div>
    </div>
  )
}
export default Task
