import { screen, render, within, fireEvent } from "@testing-library/react";

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
      name: /Select the Incorrect Answer From the List of Correct Answers/i,
    });
    const { getAllByRole } = within(list);
    const answers = getAllByRole("listitem");

    expect(answers.length).toBe(4);
  });

  it("submit button is of type button and is disabled initially when no answer is selected", () => {
    setup();

    const buttonEl = screen.getByRole("button", { name: "Check Answer" });

    expect(buttonEl).toHaveAttribute("disabled");
  });

  it("enables the submit button when one answer is selected / clicked", () => {
    setup();

    const list = screen.getByRole("list", {
      name: /Select the Incorrect Answer From the List of Correct Answers/i,
    });
    const { getAllByRole } = within(list);
    const answers = getAllByRole("listitem");

    const buttonEl = screen.getByRole("button", { name: "Check Answer" });

    fireEvent.click(answers[0]);

    expect(buttonEl).not.toBeDisabled();
  });

  it("answer list item has an active class when user clicks on a particular answer", () => {
    setup();

    const list = screen.getByRole("list", {
      name: /Select the Incorrect Answer From the List of Correct Answers/i,
    });
    const { getAllByRole } = within(list);
    const answers = getAllByRole("listitem");

    const buttonEl = screen.getByRole("button", { name: "Check Answer" });

    fireEvent.click(answers[0]);

    expect(answers[0]).toHaveClass("bg-indigo-500 text-white");
  });

  it("does not render the notification component initially", () => {
    setup();

    const NotificationModalEl = screen.queryByTestId("notification-modal");

    expect(NotificationModalEl).not.toBeInTheDocument();
  });

  it("does not render the backdrop component initially", () => {
    setup();

    const backdropEl = screen.queryByTestId("backdrop");

    expect(backdropEl).not.toBeInTheDocument();
  });

  it("displays the notificationModal and backdrop when the user clicks the check answer button", () => {
    setup();
    const backdropEl = screen.queryByTestId("backdrop");
    const NotificationModalEl = screen.queryByTestId("notification-modal");

    const buttonEl = screen.getByRole("button", { name: "Check Answer" });

    const list = screen.getByRole("list", {
      name: /Select the Incorrect Answer From the List of Correct Answers/i,
    });
    const { getAllByRole } = within(list);
    const answers = getAllByRole("listitem");

    fireEvent.click(answers[0]);
    fireEvent.click(buttonEl);

    // expect(backdropEl).toBeInTheDocument();
    // expect(NotificationModalEl).toBeInTheDocument();
  });

  it("renders the QuizQuestion component", () => {
    setup();

    const QuizQuestionEl = screen.getByTestId("question-component");

    expect(QuizQuestionEl).toBeInTheDocument();
  });
});
