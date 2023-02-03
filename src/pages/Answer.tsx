import ListingCard from "../components/ListingCard";
import { useParams } from "react-router-dom";

const Answer = () => {
  type QuizId = {
    id?: String;
  };

  const quiz: QuizId = useParams();
  console.log(quiz);
  return (
    <div>
      <ListingCard
        title="Question & Answers"
        onAdd={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <div className="mb-8">
          <div className="mb-3 font-thin text-xl">Question</div>
          <div className="bg-white text-xl rounded-lg p-5 font-bold">{localStorage.question}</div>
        </div>
        <div className="mb-3 font-thin text-xl">Answers</div>
        <div className="grid gap-7 mb-6 md:grid-cols-2 lg:grid-cols-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="bg-white rounded-lg p-5" key={index}>
              Question {quiz.id}
              {index + 1}
            </div>
          ))}
        </div>
      </ListingCard>
    </div>
  );
};

export default Answer;
