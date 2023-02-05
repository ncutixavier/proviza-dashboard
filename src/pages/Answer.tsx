import ListingCard from "../components/ListingCard";
import AddAnswer from "../components/answer/AddAnswer";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAnswers, selectGetAnswers } from "../features/getAnswersSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LoadingSpinner from "../components/LoadingSpinner";

const Answer = () => {
  const [openAddAnswer, setOpenAddAnswer] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  
  const { data: answers, loading, error } = useAppSelector(selectGetAnswers);

  useEffect(() => {
    dispatch(getAnswers(searchParams.get("q")));
  }, [dispatch, searchParams]);

  console.log(answers)

  return (
    <div>
      <AddAnswer open={openAddAnswer} close={() => setOpenAddAnswer(false)} />
      <ListingCard
        title="Question & Answers"
        onAdd={() => setOpenAddAnswer(true)}
      >
        <div className="mb-8">
          <div className="mb-3 font-thin text-xl">Question</div>
          <div className="bg-white text-xl rounded-lg p-5 font-bold">
            {localStorage.question}
          </div>
        </div>
        <div className="mb-3 font-thin text-xl">Answers</div>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Something bad happen!</span> {error}
          </div>
        ) : answers ? (
          <div className="grid gap-7 mb-6 md:grid-cols-2 lg:grid-cols-2">
            {answers?.docs?.map((doc: any, index: number) => (
              <div
                className={`${
                  doc?.data().is_correct ? "bg-green-500" : "bg-white"
                } rounded-lg p-5 cursor-pointer relative`}
                key={index}
              >
                <div className="text-left">{doc?.data().answer}</div>
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

export default Answer;
