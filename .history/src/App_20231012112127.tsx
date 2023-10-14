const mocks = [
import Todos from '../.history/src/components/Todos_20231012111204';
  { id: 1, title: "todo 1", completed: false },
  { id: 2, title: "todo 2", completed: false },
  { id: 3, title: "todo 3", completed: false },
  { id: 4, title: "todo 4", completed: false },
];

const App = () => {
  return (
    <>
    <Todos todos={mocks}/>
      <h1>holi</h1>
    </Todos>
  );
};

export default App;
