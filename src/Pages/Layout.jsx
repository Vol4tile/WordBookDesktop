import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddWord from "../components/AddWord";
import { useState } from "react";

const Layout = ({ tasks, setTasks, newTask, setNewTask }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Navbar visible={visible} setVisible={setVisible}></Navbar>
      <main>
        {visible && (
          <AddWord
            tasks={tasks}
            setTasks={setTasks}
            newTask={newTask}
            setNewTask={setNewTask}
          ></AddWord>
        )}
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Layout;
