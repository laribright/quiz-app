import NotificationModal from "@/components/NotificationModal";
import Head from "next/head";
import { useState } from "react";

import Backdrop from "@/components/UI/Backdrop";
let quizData = require("../quizData.json");

const Home = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerInterface | null>(
    null
  );
  const [displayResult, setDisplayResult] = useState(false);

  const question = quizData.data.getStep.stepQuiz.questionText;
  const answers = quizData.data.getStep.stepQuiz.answerOptions;
  interface AnswerInterface {
    answerText: string;
    isCorrect: Boolean;
  }

  const onAnswerSelected = (answer: AnswerInterface) => {
    setSelectedAnswer(answer);
  };

  const onCheckAnswer = () => {
    setDisplayResult(true);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 grid place-content-center via-purple-500 to-pink-500 w-screen h-screen">
      <Head>
        <title>Quiz Application</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Quiz application" />
      </Head>

      {selectedAnswer && <Backdrop />}

      {selectedAnswer && <NotificationModal isCorrect={true} />}

      <main className="md:w-[50vw] border border-white p-4 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white">
        <div className="text-center border-pink-400 border-[2px] text-2xl font-semibold py-3 rounded-sm">
          <h2>{question}</h2>
        </div>

        <div className="mt-14 mb-9">
          <h3 id="answer-heading">Select Answer</h3>
          <ul aria-labelledby="answer-heading">
            {answers.map((answer: AnswerInterface) => (
              <li
                onClick={() => onAnswerSelected(answer)}
                className={`${
                  selectedAnswer?.answerText === answer.answerText
                    ? "bg-indigo-500 text-white"
                    : ""
                } border-indigo-500 border-[2px] rounded-md my-3 cursor-pointer hover:-translate-y-1 duration-200 hover:shadow-xl py-3 px-4`}
                key={answer.answerText}
              >
                {answer.answerText}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onCheckAnswer}
          disabled={!selectedAnswer}
          className="bg-pink-500 disabled:bg-pink-400 disabled:cursor-not-allowed text-white px-5 py-3 disabled:hover:scale-100 hover:scale-105 duration-300 rounded-md cursor-pointer"
        >
          Check Answer
        </button>
      </main>
    </div>
  );
};

export default Home;
