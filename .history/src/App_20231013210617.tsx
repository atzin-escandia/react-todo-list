import { useState } from "react";
import { Todos } from "./components/Todos";
const mocks = [
  { id: "1", title: "todo 1", completed: false },
  { id: "2", title: "todo 2", completed: false },
  { id: "3", title: "todo 3", completed: false },
  { id: "4", title: "todo 4", completed: false },
];

const App = () => {
  const [todos] = useState(mocks);

  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  );
};

export default App;
