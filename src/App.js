import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PatientForm from "./pages/PatientForm";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import SignUp from "./pages/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import NoPage from "./NoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#131619] font-plusJakarta">
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patientform" element={<PatientForm />} />
          <Route
            path="/scheduleappointment"
            element={<ScheduleAppointment />}
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
