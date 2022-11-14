import Image from "next/image";
import { FC } from "react";

import ThumbsUp from "../public/assets/images/thumbsUp.png";

interface NotificationModalProps {
  isCorrect: boolean;
  playAgainFn: () => void;
}

const NotificationModal: FC<NotificationModalProps> = (props) => {
  const { isCorrect, playAgainFn } = props;

  return (
    <div
      data-testid="notification-modal"
      className="w-[50vw] p-3 fixed z-20 text-center bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {isCorrect ? (
        <h4 className="mb-5 md:text-4xl font-semibold text-green-700">
          Congrats You Passed the Quiz
        </h4>
      ) : (
        <h4 className="mb-5 md:text-4xl font-semibold text-green-700">
          Opps, not correct this time
        </h4>
      )}

      {isCorrect && <Image src={ThumbsUp} alt="Thumbs Up" />}

      <button
        onClick={playAgainFn}
        className="mt-5 bg-pink-500 text-white px-4 py-2 rounded-xl"
      >
        Play Again
      </button>
    </div>
  );
};

export default NotificationModal;
