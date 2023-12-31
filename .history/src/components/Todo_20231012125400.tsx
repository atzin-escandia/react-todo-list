interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const Todos: React.FC = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};
