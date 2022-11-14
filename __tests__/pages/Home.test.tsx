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
      name: /Select Answer/i,
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
      name: /Select Answer/i,
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
      name: /Select Answer/i,
    });
    const { getAllByRole } = within(list);
    const answers = getAllByRole("listitem");

    const buttonEl = screen.getByRole("button", { name: "Check Answer" });

    fireEvent.click(answers[0]);

    expect(answers[0]).toHaveClass("bg-indigo-500 text-white");
  });

  it("renders the notification component", () => {
    setup();

    const NotificationModalEl = screen.getByTestId("notification-modal");

    expect(NotificationModalEl).toBeInTheDocument();
  });

  it("renders the backdrop component when", () => {
    setup();

    const backdropEl = screen.getByTestId("backdrop");

    expect(backdropEl).toBeInTheDocument();
  });
});
