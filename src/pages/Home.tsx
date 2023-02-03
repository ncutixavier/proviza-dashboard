import { useState, useEffect } from "react";
import ListingCard from "../components/ListingCard";
import { useNavigate } from "react-router-dom";
import AddQuestion from "../components/questions/AddQuestion";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getQuestions,
  selectGetQuestions,
} from "../features/getQuestionsSlice";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [openAddQuestion, setOpenAddQuestion] = useState<boolean>(false);
  const {
    data: questions,
    loading,
    error,
  } = useAppSelector(selectGetQuestions);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const handleNavigate = (doc: any) => {
    localStorage.setItem("question", doc?.data().question);
    navigate(`answer?q=${doc?.id}`);
  };

  return (
    <div>
      <AddQuestion
        open={openAddQuestion}
        close={() => setOpenAddQuestion(false)}
      />
      <ListingCard
        title={
          questions ? `Questions(${questions?.docs?.length ?? 0})` : "questions"
        }
        onAdd={() => setOpenAddQuestion(true)}
      >
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Something bad happen!</span> {error}
          </div>
        ) : questions ? (
          <div className="grid gap-7 mb-6 md:grid-cols-4 lg:grid-cols-4">
            {questions?.docs?.map((doc: any, index: number) => (
              <div
                className="bg-white rounded-lg p-5 cursor-pointer relative"
                key={index}
                onClick={() => handleNavigate(doc)}
              >
                <div className="text-left">{doc?.data().question}</div>
                <div className="absolute text-[8px] right-2 top-1 h-6 w-6 bg-violet-100 font-bold flex items-center justify-center rounded-full text-violet-600">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            No data found!
          </div>
        )}
      </ListingCard>
    </div>
  );
};

export default Home;
