import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Signup from "./component/signup/Signup";
import Login from "./component/login/Login";
import SortingPage from "./Pages/SortingPage";
import Visualize from "./component/visualize/Visualize";

import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/sorting" element={<SortingPage />} />
          <Route path="/visualize" element={<Visualize />} />
        </Routes>

        <Toaster position="top-center" reverseOrder={false} />
      </Router>
    </>
  );
}

export default App;
