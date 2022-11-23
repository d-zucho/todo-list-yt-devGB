import styles from './taskList.module.css'
import Task from '../Task'
import { useState } from 'react'

const TaskList = ({ todos, toggleStatus }) => {
  const todoTotal = todos.length

  //* Filter completed tasks
  const completedTodos = todos.filter((todo) => todo.completed)

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
          <span className={styles.totalCompleted}>{`1 of ${todoTotal}`}</span>
        </div>
      </header>
      {/* List Header END */}
      {/* List Body */}
      <div className={styles.taskList}>
        {todos.map((todo) => (
          <Task key={todo.id} toggleStatus={toggleStatus} todo={todo} />
        ))}
      </div>
      {/* List Body -- Tasks */}
    </section>
  )
}
export default TaskList
