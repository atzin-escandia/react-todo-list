import { Props } from "../types";
import Todo from "./Todo";

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todolist">
      {todos.map((todo) => (
        <li className={todo.completed ? "completed" : ""} key={todo.id}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  );
};
