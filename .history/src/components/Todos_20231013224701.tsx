import { ListOfTodos, TodoType } from "../types";
import Todo from "./Todo";

export interface Props {
  todos: ListOfTodos;
  onHandleRemove: ({ id }: Pick<TodoType, "id">) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id", "completed">) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onHandleRemove,
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
            onHandleRemove={onHandleRemove}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
