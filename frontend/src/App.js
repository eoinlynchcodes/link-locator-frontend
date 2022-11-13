import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import CreateAccountPage from "./pages/CreateAccount";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<CreateAccountPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Router>
      <Footer/>
    </>
  );
}

export default App;
