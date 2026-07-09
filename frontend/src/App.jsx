import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Signup from "./component/signup/Signup";
import Login from "./component/login/Login";
import SortingPage from "./Pages/SortingPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/sorting" element={<SortingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
