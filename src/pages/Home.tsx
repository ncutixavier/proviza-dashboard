import { useState } from "react";
import ListingCard from "../components/ListingCard";
import { useNavigate } from "react-router-dom";
import AddQuestion from "../components/questions/AddQuestion";

const Home = () => {
  const navigate = useNavigate();
  const [openAddQuestion, setOpenAddQuestion] = useState<boolean>(false);

  return (
    <div>
      <AddQuestion
        open={openAddQuestion}
        close={() => setOpenAddQuestion(false)}
      />
      <ListingCard title="Questions" onAdd={() => setOpenAddQuestion(true)}>
        <div className="grid gap-7 mb-6 md:grid-cols-5 lg:grid-cols-5">
          {Array.from({ length: 120 }).map((_, index) => (
            <div
              className="bg-white rounded-lg p-5 cursor-pointer"
              key={index}
              onClick={() => navigate(`answer/${index}`)}
            >
              Question {index + 1}
            </div>
          ))}
        </div>
      </ListingCard>
    </div>
  );
};

export default Home;
