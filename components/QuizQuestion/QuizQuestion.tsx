import { FC } from "react";

const QuizQuestion: FC<{ question: string }> = (props) => {
  const { question } = props;

  return (
    <div
      data-testid="question-component"
      className="text-center border-pink-400 border-[2px] text-2xl font-semibold py-3 rounded-sm"
    >
      <h5 className="text-lg text-gray-600">Question</h5>
      <h2>{question}</h2>
    </div>
  );
};

export default QuizQuestion;
