import { render, screen } from "@testing-library/react";

import QuizQuestion from "@/components/QuizQuestion/QuizQuestion";

describe("<QuizQuestion>", () => {
  it("renderst the quiz question component", () => {
    render(<QuizQuestion question="Test" />);

    const QuizQuestionEl = screen.getByTestId("question-component");

    expect(QuizQuestionEl).toBeInTheDocument();
  });
});
