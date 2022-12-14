import { render, screen } from "@testing-library/react";

import NotificationModal from "@/components/NotificationModal";

describe("<NotificationModal />", () => {
  const setup = () =>
    render(<NotificationModal playAgainFn={() => null} isCorrect={true} />);

  it("renders the notification component", () => {
    setup();

    const NotificationModalEl = screen.getByTestId("notification-modal");

    expect(NotificationModalEl).toBeInTheDocument();
  });
});
