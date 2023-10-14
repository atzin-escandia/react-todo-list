interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const Todo = ({ todos: todo }) => {
  return (
    <div>
      {todo.map((todo: Todo) => {
        <ul>
          <li key={todo.id}>{todo.title}</li>
        </ul>;
      })}
    </div>
  );
};

export default Todo;
