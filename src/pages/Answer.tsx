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
      <ListingCard title="Answer">
        <div className="mb-5 font-medium text-xl">Question {quiz.id}</div>
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
