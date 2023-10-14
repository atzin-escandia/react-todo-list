import React, { useState } from "react";

interface Props {
  saveTodo: ({ title }: string) => void;
}

const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setinputValue] = useState("second");
  return <div></div>;
};

export default CreateTodo;
