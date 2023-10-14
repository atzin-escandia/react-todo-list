import { ListOfTodos, TodoType } from "../types";
import Todo from "./Todo";

interface Props {
  todos: ListOfTodos;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id", "completed">) => void;
  onRemoveTodo: ({ id }: Pick<TodoType, "id">) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleted,
}: Props) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onHandleRemove={onRemoveTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
