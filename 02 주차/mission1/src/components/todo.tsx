import React, { useState } from 'react';
import type { TTodo } from '../types/todo';
import TodoForm from './todoform';
import TodoList from './todolist';

const Todo = (): React.ReactElement => {
  const [todos, setTodos] = useState<TTodo[]>([
    
  ]);
  const [doneTodos, setDoneTodos] = useState<TTodo[]>([
   
  ]);
  const [input, setInput] = useState<string>('');

  // 할 일 추가
  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo: TTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // 완료 처리
  const completeTodo = (id: number) => {
    const todoToMove = todos.find(t => t.id === id);
    if (!todoToMove) return;
    setTodos(todos.filter(t => t.id !== id));
    setDoneTodos([...doneTodos, todoToMove]);
  };

  // 삭제 처리
  const deleteTodo = (id: number) => {
    setDoneTodos(doneTodos.filter(t => t.id !== id));
  };

  return (
    <main>
      <div className="main_box">
        <p><strong>HAN TODO</strong></p>

        <div className="main_input--box">
          <TodoForm input={input} setInput={setInput} addTodo={addTodo}/>
        </div>
        <div className="main_todo">
          <p><strong>할 일</strong></p>
          <p><strong>완료</strong></p>
        </div>

        <div className="main_container">
          <div className="box left">
            <TodoList
              todos = {todos}
              buttonLabel='완료'
              buttonColor='#28a745'
              onClick={completeTodo}/>
          </div>

          <div className="box right">
            <TodoList
              todos = {doneTodos}
              buttonLabel='삭제'
              buttonColor='#28a745'
              onClick={deleteTodo}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Todo;
