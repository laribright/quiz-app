import { screen, render, within } from "@testing-library/react";

import Home from "@/pages/index";

describe("<HomePage />", () => {
  const setup = () => render(<Home />);

  it("displays the quiz question", () => {
    setup();
    const QUIZ_QUESTION = "What can you do with Roland after modelling him?";

    const quizQuestion = screen.getByRole("heading", { level: 2 });

    expect(quizQuestion).toBeInTheDocument();
    expect(quizQuestion).toHaveTextContent(QUIZ_QUESTION);
  });

  it("displays the quiz answers", () => {
    setup();

    const list = screen.getByRole("list", {
      name: /Select Answer/i,
    });
    const { getAllByRole } = within(list);
    const answers = getAllByRole("listitem");
    
    expect(answers.length).toBe(4);
  });
});
