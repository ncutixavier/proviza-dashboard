import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Answer from "../pages/Answer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="" element={<Home />} />
          <Route path="answer/:id" element={<Answer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
