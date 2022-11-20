import styles from './taskList.module.css'
import Task from '../Task'

const TaskList = () => {
  return (
    <section className={styles.taskListContainer}>
      {/* List Header -- Stats  */}
      <header className={styles.stats}>
        <div className={styles.totalStats}>
          <p className={styles.createdTotal}>Created tasks</p>
          <span className={styles.totalTaskNumber}>5</span>
        </div>

        <div className={styles.completedStats}>
          <p className={styles.completed}>Completed</p>
          <span className={styles.totalCompleted}>2 of 5</span>
        </div>
      </header>
      {/* List Header END */}
      <Task />

      {/* List Body -- Tasks */}
    </section>
  )
}
export default TaskList
