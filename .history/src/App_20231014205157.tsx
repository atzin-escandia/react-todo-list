import { useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValue, TodoType } from "./types";
import { TODO_FILTERS } from "./consts";
import Footer from "./components/Footer";
import Header from "./components/header";

const mockTodos = [
  { id: "1", title: "todo 1", completed: false },
  { id: "2", title: "todo 2", completed: false },
  { id: "3", title: "todo 3", completed: false },
  { id: "4", title: "todo 4", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

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

  const handleRomoveCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleAddTodo = ({ title }: string): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRomoveCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handlerFilterChange}
      />
    </div>
  );
};

export default App;
