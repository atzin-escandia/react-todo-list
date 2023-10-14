export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const Todos = ({ todos: Todo }) => {
  return (
    <div>
      {todos.map((todo: Todo) => {
        <ul>
          <li key={todo.id}>{todo.title}</li>
        </ul>;
      })}
    </div>
  );
};

export default Todos;
