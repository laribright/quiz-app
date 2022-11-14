import NotificationModal from "@/components/NotificationModal";
import Head from "next/head";
import { useState } from "react";

import Backdrop from "@/components/UI/Backdrop";
import QuizQuestion from "@/components/QuizQuestion/QuizQuestion";
import QuizAnswers from "@/components/QuizAnswers/QuizAnswers";
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
    isCorrect: any;
  }

  const onAnswerSelected = (answer: AnswerInterface) => {
    setSelectedAnswer(answer);
  };

  const onCheckAnswer = () => {
    setDisplayResult(true);
  };

  const playAgainFn = () => {
    setSelectedAnswer(null);
    setDisplayResult(false);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 grid place-content-center via-purple-500 to-pink-500 w-screen h-screen">
      <Head>
        <title>Quiz Application</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Quiz application" />
      </Head>

      {selectedAnswer !== null && displayResult && <Backdrop />}

      {selectedAnswer !== null && displayResult ? (
        <NotificationModal
          playAgainFn={playAgainFn}
          isCorrect={JSON.parse(selectedAnswer.isCorrect)}
        />
      ) : (
        <></>
      )}

      <main className="md:w-[50vw] border border-white p-4 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white">
        <QuizQuestion question={question} />

        <div className="mt-14 mb-9">
          <QuizAnswers
            answers={answers}
            onAnswerSelected={onAnswerSelected}
            selectedAnswer={selectedAnswer}
          />
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
