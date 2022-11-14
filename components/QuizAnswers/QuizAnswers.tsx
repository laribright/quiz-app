import { FC } from "react";

import { AnswerInterface } from "models/QuizAnswer";

interface QuizAnswersInterface {
  answers: AnswerInterface[];
  onAnswerSelected: (answer: AnswerInterface) => void;
  selectedAnswer: AnswerInterface | null;
}

const QuizAnswers: FC<QuizAnswersInterface> = (props) => {
  const { answers, onAnswerSelected, selectedAnswer } = props;

  return (
    <>
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
    </>
  );
};

export default QuizAnswers;
