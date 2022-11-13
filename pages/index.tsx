import Head from "next/head";

let quizData = require("../quizData.json");

const Home = () => {
  const question = quizData.data.getStep.stepQuiz.questionText;
  const answers = quizData.data.getStep.stepQuiz.answerOptions;
  interface AnswerInterface {
    answerText: string;
    isCorrect: Boolean;
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 grid place-content-center via-purple-500 to-pink-500 w-screen h-screen">
      <Head>
        <title>Quiz Application</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Quiz application" />
      </Head>

      <main className="md:w-[50vw] border border-white p-4 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white">
        <div className="text-center border-pink-400 border-[2px] text-2xl font-semibold py-3 rounded-sm">
          <h2>{question}</h2>
        </div>

        <div className="mt-14">
          <h3 id="answer-heading">Select Answer</h3>
          <ul aria-labelledby="answer-heading">
            {answers.map((answer: AnswerInterface) => (
              <li
                className="border-indigo-500 border-[2px] rounded-md my-3 cursor-pointer hover:-translate-y-1 duration-200 hover:shadow-xl py-3 px-4"
                key={answer.answerText}
              >
                {answer.answerText}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
