import styles from './App.css';
import React from 'react';

export const App: React.FC = () => {
  return (
    <>
      <h1>TodoList</h1>
      <div>
        <input className={styles.todoTitleInput} />
        <textarea className={styles.todoDescriptionInput} />
        <button className={styles.todoAddButton}>ClickMe!!!!</button>
      </div>
      <div>
        <div className={styles.todoItem}>
          <div className={styles.todoItemTitle}>title1</div>
          <div className={styles.todoItemDescription}>description1</div>
        </div>
        <div className={styles.todoItem}>
          <div className={styles.todoItemTitle}>title2</div>
          <div className={styles.todoItemDescription}>description2</div>
        </div>
        <div className={styles.todoItem}>
          <div className={styles.todoItemTitle}>title3</div>
          <div className={styles.todoItemDescription}>description3</div>
        </div>
      </div>
    </>
  );
};
