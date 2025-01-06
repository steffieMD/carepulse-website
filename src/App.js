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

  // const [path, setPath] = useState("");

  // function handlePath(path) {
  //   setPath(path);
  // }

  return (
    <BrowserRouter>
      <div className="bg-[#131619] font-plusJakarta">
        {/* <Navbar linkPath={path} handlePath={handlePath} /> */}
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

/*
import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PatientForm from "./pages/PatientForm";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
  const userSignUpInfo = [...signUpInfo];
  const userInfo = [...patientInfo];
  const [appt, setAppt] = useState(() => {
    const storedApptInfo = localStorage.getItem("appt");
    return storedApptInfo ? JSON.parse(storedApptInfo) : [];
  });
  const apptInfo = [...appt];

  useEffect(() => {
    localStorage.setItem("signUpInfo", JSON.stringify(signUpInfo));
  }, [signUpInfo]);

  useEffect(() => {
    localStorage.setItem("patientInfo", JSON.stringify(patientInfo));
  }, [patientInfo]);

  useEffect(() => {
    localStorage.setItem("appt", JSON.stringify(appt));
  }, [appt]);

  const saveInfo = () => {
    setSignUpInfo((prev) => [...prev, ...userSignUpInfo]);
  };

  const savePatientInfo = () => {
    setPatientInfo((prev) => [...prev, ...userInfo]);
  };

  const saveApptInfo = () => {
    setAppt((prev) => [...prev, ...apptInfo]);
  };

  useEffect(() => {
    if (
      userSignUpInfo.length >= 1 &&
      JSON.stringify(userSignUpInfo) !== JSON.stringify(signUpInfo)
    ) {
      setSignUpInfo(userSignUpInfo);
    }
  }, [userSignUpInfo, signUpInfo]);

  useEffect(() => {
    if (
      userInfo.length >= 1 &&
      JSON.stringify(userInfo) !== JSON.stringify(patientInfo)
    ) {
      setPatientInfo(userInfo);
    }
  }, [userInfo, patientInfo]);

  useEffect(() => {
    if (
      apptInfo.length >= 1 &&
      JSON.stringify(apptInfo) !== JSON.stringify(appt)
    ) {
      setAppt(apptInfo);
    }
  }, [apptInfo, appt]);

  const [path, setPath] = useState("");

  function handlePath(path) {
    setPath(path);
  }

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="bg-[#131619] font-plusJakarta">
        <Navbar linkPath={path}  />
        <Routes>
          <Route
            path="/"
            element={
              <SignUp
                userSignUpInfo={userSignUpInfo}
                
                saveInfo={saveInfo}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login userSignUpInfo={userSignUpInfo}  />
            }
          />
          <Route
            path="/patientform"
            element={
              <PatientForm
                userInfo={userInfo}
                
                savePatientInfo={savePatientInfo}
              />
            }
          />
          <Route
            path="/scheduleappointment"
            element={
              <ScheduleAppointment
                apptInfo={apptInfo}
                
                saveApptInfo={saveApptInfo}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                apptInfo={apptInfo}
                userInfo={userInfo}
                
              />
            }
          />
          <Route
            path="/success"
            element={<Success apptInfo={apptInfo}  />}
          />
          <Route path="*" element={<NoPage  />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
*/
