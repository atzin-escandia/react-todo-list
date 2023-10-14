interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const Todo = ({ todos }) => {
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

export default Todo;
