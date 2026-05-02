import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import SnackBar from "./components/snackBar";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Tracker</h1>
        </div>
        <div className="mb-4">
          <TaskForm />
          <TaskList />
        </div>
        <SnackBar />
        <Counter />
      </div>
    </div>
  );
};

export default App;
