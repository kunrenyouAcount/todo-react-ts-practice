import styles from './TodoList.css';
import React, { useState } from 'react';
import { TodoItem } from 'src/components/TodoItem';
import { Todo } from 'src/Model/Todo';

export const TodoList: React.FC = () => {
  const [todo, setTodo] = useState<Todo>({
    title: '',
    description: '',
  });
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const changedTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = Object.assign({}, todo);
    newTodo.title = e.target.value;
    setTodo(newTodo);
  };

  const changedDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTodo = Object.assign({}, todo);
    newTodo.description = e.target.value;
    setTodo(newTodo);
  };

  const todoAddClicked = () => {
    const newTodoList = todoList.slice();
    newTodoList.push(todo);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div>
        <input className={styles.todoTitleInput} onChange={changedTitle} />
        <textarea
          className={styles.todoDescriptionInput}
          onChange={changedDescription}
        />
        <button className={styles.todoAddButton} onClick={todoAddClicked}>
          Click Me!!!!
        </button>
      </div>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};
