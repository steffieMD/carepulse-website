import Navbar from "./Navbar";
import Login from "./pages/Login";
import PatientForm from "./pages/PatientForm";
import SignUp from "./pages/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patientform" element={<PatientForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
