interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const Todos = ({ todos }) => {
  return (
    <div>
      {todos &&
        todos.map((todo: Todo) => {
          <ul>
            <li key={todo.id}>{todo.title}</li>
          </ul>;
        })}
    </div>
  );
};
