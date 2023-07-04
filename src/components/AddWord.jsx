import AddWordCSS from "../css/AddWord.module.css";
import {motion} from "framer-motion"
function AddWord({ tasks, setTasks, newTask, setNewTask }) {
  const handleAddTask = () => {
    if (newTask.en.length > 0 && newTask.tr.length > 0) {
      setTasks([...tasks, newTask]);

      if (localStorage.getItem("words")) {
        let words = [];
        words = JSON.parse(localStorage.getItem("words"));

        words.push(newTask);
        localStorage.setItem("words", JSON.stringify(words));
      } else {
        localStorage.setItem("words", JSON.stringify([newTask]));
      }

      setNewTask({ en: "", tr: "" });
    }
  };

  return (
    <motion.div className={AddWordCSS.container}
    
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    >
      <div className={AddWordCSS.innerContainer}>
        <div className={AddWordCSS.relative}>
          <input
            type="text"
            className={AddWordCSS.input}
            value={newTask.en}
            onChange={(e) => setNewTask({ ...newTask, en: e.target.value })}
            placeholder="İngilizce kelime yaz"
          />
          <span
            style={{ color: "var(--color1)" }}
            className={AddWordCSS.language}
          >
            EN
          </span>
        </div>
        <span style={{ color: "var(--color2)" }}>-</span>
        <div className={AddWordCSS.relative}>
          <input
            type="text"
            className={AddWordCSS.input}
            value={newTask.tr}
            onChange={(e) => setNewTask({ ...newTask, tr: e.target.value })}
            placeholder="Türkçe kelime yaz"
          />
          <span
            style={{ color: "var(--color6)" }}
            className={AddWordCSS.language}
          >
            TR
          </span>
        </div>
        <button className={AddWordCSS.button} onClick={handleAddTask}>
          Ekle
        </button>
      </div>
    </motion.div>
  );
}

export default AddWord;
