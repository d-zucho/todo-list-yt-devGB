import styles from './taskList.module.css'
import Task from '../Task'

const TaskList = ({ todos, setTodos, setCompleted }) => {
  const todoTotal = todos.length

  return (
    <section className={styles.taskListContainer}>
      {/* List Header -- Stats  */}
      <header className={styles.stats}>
        <div className={styles.totalStats}>
          <p className={styles.createdTotal}>Created tasks</p>
          <span className={styles.totalTaskNumber}>{todoTotal}</span>
        </div>

        <div className={styles.completedStats}>
          <p className={styles.completed}>Completed</p>
          <span className={styles.totalCompleted}>1 of 2</span>
        </div>
      </header>
      {/* List Header END */}
      {/* List Body */}
      <div className={styles.taskList}>
        {todos.map((todo) => (
          <Task key={todo.id} text={todo.text} />
        ))}
      </div>
      {/* List Body -- Tasks */}
    </section>
  )
}
export default TaskList
