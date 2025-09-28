import React from 'react';
import Todo from './components/todo';
import { TodoProvider } from './context/TodoContext';
import './App.css'

const App: React.FC = () => {
  return (
    <TodoProvider>
      <Todo></Todo>
    </TodoProvider>
  );
};

export default App;
