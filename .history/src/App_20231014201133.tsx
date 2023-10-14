import { useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValue, TodoType } from "./types";
import { TODO_FILTERS } from "./consts";
import Footer from "./components/Footer";

const mockTodos = [
  { id: "1", title: "todo 1", completed: false },
  { id: "2", title: "todo 2", completed: false },
  { id: "3", title: "todo 3", completed: false },
  { id: "4", title: "todo 4", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState(TODO_FILTERS.ALL);

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id", "completed">) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          completed,
        };
      return todo;
    });

    setTodos(newTodos);
  };

  const handlerFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onHandleRemove={handleRemove}
        onToggleCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={todos.length - activeCount}
        onClearCompleted={}
        filterSelected={filterSelected}
        handleFilterChange={handlerFilterChange}
      />
    </div>
  );
};

export default App;
