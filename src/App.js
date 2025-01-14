import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PatientForm from "./pages/PatientForm";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import SignUp from "./pages/SignUp";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import NoPage from "./NoPage";

function App() {
  const [patientInfo, setPatientInfo] = useState(() => {
    const storedPatientInfo = localStorage.getItem("patientInfo");
    return storedPatientInfo ? JSON.parse(storedPatientInfo) : [];
  });

  const [signUpInfo, setSignUpInfo] = useState(() => {
    const storedInfo = localStorage.getItem("signUpInfo");
    return storedInfo ? JSON.parse(storedInfo) : [];
  });

  const [appt, setAppt] = useState(() => {
    const storedApptInfo = localStorage.getItem("appt");
    return storedApptInfo ? JSON.parse(storedApptInfo) : [];
  });

  useEffect(() => {
    localStorage.setItem("signUpInfo", JSON.stringify(signUpInfo));
  }, [signUpInfo]);

  useEffect(() => {
    localStorage.setItem("patientInfo", JSON.stringify(patientInfo));
  }, [patientInfo]);

  useEffect(() => {
    localStorage.setItem("appt", JSON.stringify(appt));
  }, [appt]);

  const saveSignUpInfo = (info) => {
    setSignUpInfo((prev) => [...prev, info]);
  };

  const savePatientInfo = (info) => {
    setPatientInfo((prev) => [...prev, info]);
  };

  const saveApptInfo = (info) => {
    setAppt((prev) => [...prev, info]);
  };

  return (
    <BrowserRouter>
      <div className="bg-[#131619] font-plusJakarta">
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp saveInfo={saveSignUpInfo} />} />
          <Route
            path="/login"
            element={<Login signUpInfo={[...signUpInfo]} />}
          />
          <Route
            path="/patientform"
            element={<PatientForm savePatientInfo={savePatientInfo} />}
          />
          <Route
            path="/scheduleappointment"
            element={<ScheduleAppointment saveApptInfo={saveApptInfo} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard appt={appt} patientInfo={patientInfo} />}
          />
          <Route path="/success" element={<Success appt={appt} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
