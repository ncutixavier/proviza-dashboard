import ListingCard from "../components/ListingCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ListingCard title="Questions">
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
