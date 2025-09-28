import type React from "react";

interface TodoFormProps {
    input: string;
    setInput: (input: string) => void;
    addTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const TodoForm = ({input, setInput, addTodo}: TodoFormProps) : React.ReactElement => {
    return (
        <>
            <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <button onClick={addTodo}>추가</button>
        </>
    );
}

export default TodoForm