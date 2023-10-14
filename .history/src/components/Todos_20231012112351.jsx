import React from "react";

const Todos = ({ todos }) => {
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
