import Todo from "./components/Todo";
const mocks = [
  { id: "1", title: "todo 1", completed: false },
  { id: "2", title: "todo 2", completed: false },
  { id: "3", title: "todo 3", completed: false },
  { id: "4", title: "todo 4", completed: false },
];

const App = () => {
  return (
    <>
      <h1>holi</h1>

      <Todo todos={mocks} />
    </>
  );
};

export default App;
