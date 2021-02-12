import styles from './TodoItem.css';
import React from 'react';
import { Todo } from 'src/Model/Todo';

type Props = {
  todo: Todo;
  onClick?: () => void;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemTitle}>{todo.title}</div>
      <div className={styles.todoItemDescription}>{todo.description}</div>
    </div>
  );
};
