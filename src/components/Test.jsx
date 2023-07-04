import React, { useEffect, useState } from "react";
import TestCSS from "../css/Test.module.css";
import { motion } from "framer-motion";
const Test = ({ tasks }) => {
  const [questions, setQuestions] = useState([]);
  const [answered, setAnswered] = useState(0);
  const [score, setScore] = useState(0);
  const [randomOrder, setRandomOrder] = useState(null);
  const [randomAnswers, setRandomAnswers] = useState(null);
  const synth = window.speechSynthesis;
  useEffect(() => {
    setQuestions(tasks);
    randomForOrder();
    randomNumberForAnswers();
  }, [tasks]);

  const voice = (text) => {
    let utterThis = new SpeechSynthesisUtterance(text);
   
    utterThis.lang = "en-GB";
    utterThis.rate = 0.9;
    utterThis.volume = 1;

    utterThis.pitch = 1;

    synth.speak(utterThis);
  };
  const randomNumberForAnswers = () => {
    const nums = new Set();
    if (questions.length > 4) {
      while (nums.size !== 5) {
        nums.add(Math.floor(Math.random() * questions.length));
      }
      setRandomAnswers([...nums]);
    } else {
      setRandomAnswers([0, 1, 2, 3, 4]);
    }
  };
  const randomForOrder = () => {
    const nums = new Set();
    while (nums.size !== 5) {
      nums.add(Math.floor(Math.random() * 5));
    }
    setRandomOrder([...nums]);
  };
  const clickHander = (e) => {
    {
      if (answered === 1) {
        return;
      }
      if (
        questions[randomAnswers[0]]?.tr.trim() ===
        e.target.innerHTML.split(")")[1].trim()
      ) {
        setAnswered(1);
        setScore(score + 1);
        e.target.classList.add(TestCSS.right);
      } else {
        setScore(score - 1);
        e.target.classList.add(TestCSS.false);
      }
    }
  };
  return (
    <div className={TestCSS.container}>
      {questions.length > 4 ? (
        <motion.div
          className={TestCSS.innerContainer}
          key={randomAnswers}
          layout
          exit={{ opacity: 0 }}
        >
          <motion.div className={TestCSS.question}>
            <motion.h1
              layout
              exit={{ opacity: 0 }}
              variants={variants}
              animate={"show"}
              initial="hide"
            >
              {" "}
              <span
                onClick={() => {
                  voice(questions[randomAnswers[0]].en);
                
                }}
                title="seslendir"
                style={{cursor:"pointer"}}
              >
                <img src="./microfon.svg" alt="microfon"  style={{height:"15px"}} />{" "}
                {questions && questions[randomAnswers[0]]?.en}
              </span>{" "}
              kelimesinin anlamı nedir ?
            </motion.h1>
          </motion.div>
          <motion.div
            className={TestCSS.answers}
            layout
            exit={{ opacity: 0 }}
            variants={variants}
            animate={"show"}
            initial="hide"
          >
            <motion.div
              layout
              exit={{ opacity: 0 }}
              variants={variants}
              animate={"show"}
              initial="hide"
              onClick={(e) => {
                clickHander(e);
              }}
            >
              A) {questions && questions[randomAnswers[randomOrder[0]]]?.tr}
            </motion.div>
            <motion.div
              layout
              exit={{ opacity: 0 }}
              variants={variants}
              animate={"show"}
              initial="hide"
              onClick={(e) => {
                clickHander(e);
              }}
            >
              B) {questions && questions[randomAnswers[randomOrder[1]]]?.tr}
            </motion.div>
            <motion.div
              layout
              exit={{ opacity: 0 }}
              variants={variants}
              animate={"show"}
              initial="hide"
              onClick={(e) => {
                clickHander(e);
              }}
            >
              C) {questions && questions[randomAnswers[randomOrder[2]]]?.tr}
            </motion.div>
            <motion.div
              layout
              exit={{ opacity: 0 }}
              variants={variants}
              animate={"show"}
              initial="hide"
              onClick={(e) => {
                clickHander(e);
              }}
            >
              D) {questions && questions[randomAnswers[randomOrder[3]]]?.tr}
            </motion.div>
            <motion.div
              layout
              exit={{ opacity: 0 }}
              variants={variants}
              animate={"show"}
              initial="hide"
              onClick={(e) => {
                clickHander(e);
              }}
            >
              E) {questions && questions[randomAnswers[randomOrder[4]]]?.tr}
            </motion.div>
          </motion.div>
          <div className={TestCSS.nextContainer}>
            <motion.span
              style={{ color: "var(--color4)" }}
              exit={{ opacity: 0 }}
              variants={scoreVariants}
              animate={"show"}
              key={score}
              initial="hide"
            >
              Skorun: {score}
            </motion.span>
            <div
              className={TestCSS.next}
              title="Yeni soruya geç"
              onClick={(e) => {
                if (answered === 1) {
                  randomNumberForAnswers();
                  randomForOrder();
                  setAnswered(0);
                  for (let i = 0; i < 5; i++)
                    e.target.parentElement.parentElement.firstChild.nextSibling.children[
                      i
                    ].className = "";
                }
              }}
            >
              {" "}
              İleri <img src="next.svg" alt="sıradaki" />
            </div>
          </div>
        </motion.div>
      ) : (
        <div>Test için en az 5 kelimeniz olmalı.</div>
      )}
    </div>
  );
};

export const variants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
  hide: {
    x: 70,
    opacity: 0,
  },
};
export const scoreVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.1,
    },
  },
  hide: {
    y: 20,
    opacity: 0,
  },
};

export default Test;
