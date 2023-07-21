'use client'; // declare as client component
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  // task's json
  const taskList = [
    { id: 1, task: 'Read nextjs docs.' },
    { id: 2, task: 'Understand nextjs folder structure.' },
    { id: 3, task: 'Do CRUD operations.' },
  ];

  const [task, setTask] = useState('');
  const [todo, setTodo] = useState(taskList);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = { id: todo.length + 1, task };
    setTodo([...todo, newTask]); // append new task object
    setTask(''); // clear input fild upon submit
    console.log(todo);
  };

  const handleUpdateTask = (id) => {
    const tsk = todo.find((t) => t.id === id);
    tsk.task = task;
    setTodo([...todo]);
    setTask('');
    console.log(todo);
  };

  const handleDeleteTask = (id) => {
    const tsk = todo.find((t) => t.id === id);
    const index = todo.indexOf(tsk);
    todo.splice(index, 1);
    setTodo([...todo]);
    setTask('');
    console.log(todo);
  };

  return (
    <main className={styles.main}>
      <label className={styles.label}>Add a Task:</label>

      <form>
        <input
          placeholder='Task Name'
          className={styles.input}
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={handleAddTask}>ADD</button>
      </form>

      <section className={styles.section}>
        {todo.map((task) => {
          return (
            <ul key={task.id} className={styles.tasks}>
              <li>
                {task.task}

                {/* update */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleUpdateTask(task.id);
                  }}
                >
                  ✍️
                </button>

                {/* delete */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteTask(task.id);
                  }}
                >
                  ❌
                </button>
              </li>
            </ul>
          );
        })}
      </section>
    </main>
  );
}
