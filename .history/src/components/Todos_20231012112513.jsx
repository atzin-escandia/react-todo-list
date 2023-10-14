import React from "react";

interface Todo {
  id: string;
}

const Todos = ({ todos: Todo }) => {
  return (
    <div>
      {todos.map((todo) => {
        <ul>
          <li key={todo.id}>{todo.title}</li>
        </ul>;
      })}
    </div>
  );
};

export default Todos;
