import { useEffect, useState } from "react";
import TodoList from "./components/AddWord";
import Test from "./components/Test";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import WordList from "./components/WordList";
import { defaultWords } from "./assets/defaultWords";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    en: "",
    tr: "",
  });
  useEffect(() => {
    if (localStorage.getItem("words")) {
 
      setTasks(JSON.parse(localStorage.getItem("words")));
    }else{
      setTasks(defaultWords)
      localStorage.setItem("words",JSON.stringify(defaultWords))
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                tasks={tasks}
                setTasks={setTasks}
                newTask={newTask}
                setNewTask={setNewTask}
              />
            }
          >
            <Route
              index={true}
              element={<WordList tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/AddWord"
              element={
                <TodoList
                  tasks={tasks}
                  setTasks={setTasks}
                  newTask={newTask}
                  setNewTask={setNewTask}
                />
              }
            />
            <Route path="/Test" element={<Test tasks={tasks} />} />

            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
