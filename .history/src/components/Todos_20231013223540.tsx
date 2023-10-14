import { ListOfTodos, TodoType } from "../types";
import Todo from "./Todo";

export interface Props {
  todos: ListOfTodos;
  onHandleRemove: () => void;
  onToggleCompleted: () => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onHandleRemove,
  onToggleCompleted,
}: Props) => {
  return (
    <ul className="todo-list">
      {todos.map((todo: TodoType) => (
        <li className={`${todo.completed ? 'completed', ''}`} key={todo.id}>
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
