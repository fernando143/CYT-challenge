import { Header } from "./components/header/header.component";
import "./App.css";
import TasksProvider from "./context/tasks.context";
import { Tasks } from "./components/tasks/tasks.component";

function App() {
  return (
    <>
      <TasksProvider>
        <div>
          <Header />
          <div className="layout">
            <Tasks />
          </div>
        </div>
      </TasksProvider>
    </>
  );
}

export default App;
