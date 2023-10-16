import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import TodoScreen from "./components/TodoScreen";

const App = (): JSX.Element => {
  return (
    <div className="flex-row">
      <div className="flex justify-center items-center">
        <h1 className="text-[25px] font-bold">TYPESCRIPT AND REACT TO-DO</h1>
      </div>
      <div className="flex justify-center mt-10">
        <Navbar />
      </div>
      <div className="flex justify-center mt-10">
        <Todo />
      </div>
      <div className="flex justify-center mt-10">
        <TodoScreen />
      </div>
    </div>
  )
};

export default App;

