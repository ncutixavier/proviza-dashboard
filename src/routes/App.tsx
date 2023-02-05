import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayouts from "../layouts/MainLayouts";
import Question from "../pages/Question";
import Answer from "../pages/Answer";
import Home from "../pages/Home";
import jwt_decode from "jwt-decode";
import ProtectedRoute from "./ProtectedRoute";

export const isAuthenticated = () => {
  try {
    const decoded: any = jwt_decode(localStorage.token);
    const currentDate = new Date();
    if (decoded.exp * 1000 < currentDate.getTime()) {
      return; //Token is expired
    }
    return decoded;
  } catch (e) {
    return;
  }
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute isLoggedIn={isAuthenticated} />}>
            <Route path="/proviza" element={<MainLayouts />}>
              <Route path="" element={<Question />} />
              <Route path="questions" element={<Question />} />
              <Route path="answers" element={<Answer />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
};

export default App;
