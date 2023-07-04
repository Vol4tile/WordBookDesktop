import React from "react";
import WordListCSS from "../css/WordList.module.css";
import {motion} from "framer-motion"
const WordList = ({ tasks, setTasks }) => {
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];

    newTasks.splice(index, 1);
    setTasks(newTasks);
    if (localStorage.getItem("words")) {
      let words = [];
      words = JSON.parse(localStorage.getItem("words"));

      words = words.filter((data, key) => key !== index);
      
      localStorage.setItem("words", JSON.stringify(words));
    }
  };

  return (
    <motion.div className={WordListCSS.container}  layout
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}>
      {tasks.map((task, index) => (
        <motion.div key={index} className={WordListCSS.innerContainer}  layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}>
          <div className={WordListCSS.words}>
            <div className={WordListCSS.texts}>
              <div
                style={{ justifyContent: "flex-end", color: "var(--color1)" }}
                className={WordListCSS.texts}
              >
                {task.en}
              </div>
              <span className={WordListCSS.tire}>-</span>
              <div
                style={{ justifyContent: "flex-start", color: "var(--color6)" }}
                className={WordListCSS.texts}
              >
                {" "}
                {task.tr}
              </div>
            </div>
          </div>
          <button
            className={WordListCSS.button}
            title="Sil"
            onClick={() => handleDeleteTask(index)}
          >
            <img src="delete.svg" alt="" />
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WordList;
