// src/components/TodoList.tsx
import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>This is the To-do List page</h1>
        <p>You can use this page to write down things that you need to remember such as work, groceries, hobbies or other errands. <br></br> There is also a delete button to remove tasks once you are done.</p>
        <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            required
          />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default TodoList;
