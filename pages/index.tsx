import Head from "next/head";

let quizData = require("../quizData.json");

const Home = () => {
  const question = quizData.data.getStep.stepQuiz.questionText;

  return (
    <div>
      <Head>
        <title>Quiz Application</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Quiz application" />
      </Head>

      <h2>{question}</h2>
    </div>
  );
};

export default Home;
