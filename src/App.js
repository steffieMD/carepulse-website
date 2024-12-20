import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PatientForm from "./pages/PatientForm";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import NoPage from "./NoPage";

function App() {
  const [patientInfo, setPatientInfo] = useState([]);
  const [signUpInfo, setSignUpInfo] = useState([]);
  const userSignUpInfo = [...signUpInfo];
  const userInfo = [...patientInfo];

  if (userSignUpInfo.length >= 1) {
    setSignUpInfo(userSignUpInfo);
  }

  if (userInfo.length >= 1) {
    setPatientInfo(userInfo);
  }

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <div className="bg-[#131619] font-plusJakarta">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<SignUp userSignUpInfo={userSignUpInfo} />}
          />
          <Route
            path="/login"
            element={<Login userSignUpInfo={userSignUpInfo} />}
          />
          <Route
            path="/patientform"
            element={<PatientForm userInfo={userInfo} />}
          />
          <Route
            path="/scheduleappointment"
            element={<ScheduleAppointment userInfo={userInfo} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
