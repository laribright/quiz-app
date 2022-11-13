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
    <div>
      <Head>
        <title>Quiz Application</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Quiz application" />
      </Head>

      <h2>{question}</h2>

      <h3 id="answer-heading">Select Answer</h3>
      <ul aria-labelledby="answer-heading">
        {answers.map((answer: AnswerInterface) => (
          <li key={answer.answerText}>{answer.answerText}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
