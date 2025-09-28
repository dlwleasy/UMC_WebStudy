import { createContext, useState } from "react";
import type { TTodo } from "../types/todo";
import type {PropsWithChildren} from 'react'

interface ITodoContext {
    todos: TTodo[];
    doneTodos: TTodo[];
    addTodo: () => void;
    completeTodo : (id: number) => void;
    deleteTodo : (id: number) => void;
    setInput : (input: string) => void;
    input : string;
    theme : string;
    ToggleTheme : () => void;
}

export const TodoContext = createContext<ITodoContext | undefined>(undefined)

export const TodoProvider = ({children}: PropsWithChildren) => {
    const [todos, setTodos] = useState<TTodo[]>([
        
      ]);
    const [doneTodos, setDoneTodos] = useState<TTodo[]>([
       
      ]);
    const [input, setInput] = useState<string>('');

    const [theme, setTheme] = useState<string>('light')
    
    const ToggleTheme = ():void => (
        setTheme((prevTheme) => 
        prevTheme === 'light' ? 'dark':'light'
        )
    )

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

    return <TodoContext.Provider value={{todos, doneTodos, addTodo, completeTodo, deleteTodo, setInput, input, theme, ToggleTheme}}>
        {children}
    </TodoContext.Provider>

}