import type { TTodo } from "../types/todo";
interface TodoListProps {

    todos: TTodo[];
    buttonLabel:string;
    buttonColor:string;
    onClick: (id: number) => void;
}

const TodoList = ({todos, buttonLabel, buttonColor, onClick}:TodoListProps) : React.ReactElement => {
    return (
        <>
             <ul className="render-container__list">
              {todos.map(todo => (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <button
                    style={{backgroundColor: buttonColor}}
                    onClick={() => onClick(todo.id)}
                  >
                    {buttonLabel}
                  </button>
                </li>
              ))}
            </ul>
        </>
    )
}

export default TodoList