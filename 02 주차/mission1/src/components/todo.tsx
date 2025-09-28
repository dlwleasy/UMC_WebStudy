import React, { useContext } from 'react';
import TodoForm from './todoform';
import TodoList from './todolist';
import { TodoContext } from '../context/TodoContext';

const Todo = (): React.ReactElement => {
  const context = useContext(TodoContext)
  return (
    <main className={context?.theme}>
      <nav className='nav_container'>
        <button className = {context?.theme} onClick={context?.ToggleTheme}>
          테마 변경
        </button>
      </nav>
      <div className={context?.theme}>
        <p><strong>HAN TODO</strong></p>

        <div className="main_input--box">
          <TodoForm input={context.input} setInput={context.setInput} addTodo={context.addTodo}/>
        </div>
        <div className="main_todo">
          <p><strong>할 일</strong></p>
          <p><strong>완료</strong></p>
        </div>

        <div className="main_container">
          <div className="box left">
            <TodoList
              todos = {context.todos}
              buttonLabel='완료'
              buttonColor='#28a745'
              onClick={context.completeTodo}/>
          </div>

          <div className="box right">
            <TodoList
              todos = {context.doneTodos}
              buttonLabel='삭제'
              buttonColor='#28a745'
              onClick={context.deleteTodo}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Todo;
