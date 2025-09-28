import React, { useState } from 'react';
import type { TTodo } from '../types/todo';

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
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <button onClick={addTodo}>추가</button>
        </div>

        <div className="main_todo">
          <p><strong>할 일</strong></p>
          <p><strong>완료</strong></p>
        </div>

        <div className="main_container">
          <div className="box left">
            <ul className="render-container__list">
              {todos.map(todo => (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <button
                    style={{ backgroundColor: '#28a745' }}
                    onClick={() => completeTodo(todo.id)}
                  >
                    완료
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="box right">
            <ul className="render-container__list">
              {doneTodos.map(todo => (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <button
                    style={{ backgroundColor: '#dc3545' }}
                    onClick={() => deleteTodo(todo.id)}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Todo;
