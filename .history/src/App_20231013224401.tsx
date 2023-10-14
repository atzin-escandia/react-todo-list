import { useState } from "react";
import { Todos } from "./components/Todos";
import { TodoType } from "./types";

const App = () => {
  const mockTodos = [
    { id: "1", title: "todo 1", completed: false },
    { id: "2", title: "todo 2", completed: false },
    { id: "3", title: "todo 3", completed: false },
    { id: "4", title: "todo 4", completed: false },
  ];

  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id", "completed">) => {
    const newTodos = todos.filter((todo) => {
      todo.id === id
        ? {
            ...todo,
            completed,
          }
        : todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onHandleRemove={handleRemove}
        onToggleCompleted={handleCompleted}
      />
    </div>
  );
};

export default App;
