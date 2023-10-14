import React from "react";

interface Props {
  saveTodo: ({ title }: string) => void;
}

const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  return <div></div>;
};

export default CreateTodo;
