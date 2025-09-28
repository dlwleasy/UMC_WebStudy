export interface TTodo {
  id: number;
  text: string;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
