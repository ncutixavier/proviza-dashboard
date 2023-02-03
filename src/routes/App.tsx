import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Answer from "../pages/Answer";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route path="" element={<Home />} />
            <Route path="answer" element={<Answer />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
};

export default App;
