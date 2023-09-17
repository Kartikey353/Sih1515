import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./Components/MainScreen/MainScreen";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Registration />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
