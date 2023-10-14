import { Props, TodoType } from "../types";

export const Todos: React.FC<Props> = ({ todos, onHandleRemove }: TodoType) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className={todo.completed ? "completed" : ""} key={todo.id}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onHandleRemove={onHandleRemove}
          />
        </li>
      ))}
    </ul>
  );
};
