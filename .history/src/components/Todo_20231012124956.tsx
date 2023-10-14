import { useState } from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const Todo = ({ todos: Todo }) => {
  const [todos, setTodos] = useState<Todo[]>(todos);

  return (
    <div>
      {todos.map((todo: Todo) => {
        <ul>
          <li key={todo.id}>{todo.title}</li>
        </ul>;
      })}
    </div>
  );
};

export default Todo;
