import * as React from "react";
import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import CreateAccountPage from "./pages/CreateAccount";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/create" element={<CreateAccountPage/>}/>
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
