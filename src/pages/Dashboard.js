import React, { useEffect } from "react";
import { useState } from "react";
import adminImg from "../assets/png/admin.png";
import calendarCheckGlow from "../assets/svg/calendar-Glow.svg";
import hourGlassGlow from "../assets/svg/hourglass-Glow.svg";
import alertTriangleGlow from "../assets/svg/alert-Glow.svg";
import alex from "../assets/png/alex.png";
import michael from "../assets/png/sarah.png";
import jasmine from "../assets/png/jasmine.png";
import hardik from "../assets/png/hardik.png";
import alyana from "../assets/png/alyana.png";
import doc1 from "../assets/png/sarah.png";
import doc2 from "../assets/png/ava.png";
import doc3 from "../assets/png/adam.png";

const Dashboard = ({ handlePath }) => {
  const doctors = [
    {
      name: "Dr. Sarah Safari",
      img: doc1,
    },
    {
      name: "Dr. Ava Williams",
      img: doc2,
    },
    {
      name: "Dr. Adam Smith",
      img: doc3,
    },
    {
      name: "Dr. Alex Ramirez",
      img: alex,
    },
    {
      name: "Dr. Michael May",
      img: michael,
    },
    {
      name: "Dr. Jasmine Lee",
      img: jasmine,
    },
    {
      name: "Dr. Hardik Sharma",
      img: hardik,
    },
    {
      name: "Dr Alyana Cruz",
      img: alyana,
    },
  ];

  const info = [
    {
      name: "Phoenix Baker",
      date: "Jan 4, 2022",
      status: "Scheduled",
      statusIcon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="check">
            <path
              id="icon"
              d="M1.5 5.9L4.14546 8.72183C4.54054 9.14324 5.20946 9.14324 5.60454 8.72183L10.5 3.5"
              stroke="#24ae7c"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
        </svg>
      ),
      doctor: "Dr. Alex Ramirez",
      docImg: alex,
    },
    {
      name: "Candice Wu",
      date: "Jan 2, 2022",
      status: "Pending",
      statusIcon: (
        <svg
          className=""
          width="12"
          height="12"
          viewBox="0 0 50 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Icon"
            d="M24.0002 16.9998L18.303 12.2522C17.4565 11.5468 17.0333 11.1941 16.729 10.7618C16.4594 10.3787 16.2592 9.95122 16.1375 9.49888C16.0002 8.98835 16.0002 8.43743 16.0002 7.33557V3.6665M24.0002 16.9998L29.6973 12.2522C30.5438 11.5468 30.967 11.1941 31.2713 10.7618C31.5409 10.3787 31.7411 9.95122 31.8628 9.49888C32.0002 8.98835 32.0002 8.43743 32.0002 7.33557V3.6665M24.0002 16.9998L18.303 21.7475C17.4565 22.4529 17.0333 22.8056 16.729 23.2379C16.4594 23.621 16.2592 24.0484 16.1375 24.5008C16.0002 25.0113 16.0002 25.5622 16.0002 26.6641V30.3332M24.0002 16.9998L29.6973 21.7475C30.5438 22.4529 30.967 22.8056 31.2713 23.2379C31.5409 23.621 31.7411 24.0484 31.8628 24.5008C32.0002 25.0113 32.0002 25.5622 32.0002 26.6641V30.3332M13.3335 3.6665H34.6668M13.3335 30.3332H34.6668"
            stroke="#79B5EC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      doctor: "Dr. Michael May",
      docImg: michael,
    },
    {
      name: "Lana Steiner",
      date: "Jan 4, 2022",
      status: "Cancelled",
      statusIcon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="#F37877"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="cross">
            <path
              id="icon"
              d="M4.16669 4.1665L15.8334 15.8332M15.8334 4.1665L4.16669 15.8332"
              stroke="#F37877"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </g>
        </svg>
      ),
      doctor: "Dr. Jasmine Lee",
      docImg: jasmine,
    },
    {
      name: "Drew Cano",
      date: "Jan 8, 2022",
      status: "Scheduled",
      statusIcon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="check">
            <path
              id="icon"
              d="M1.5 5.9L4.14546 8.72183C4.54054 9.14324 5.20946 9.14324 5.60454 8.72183L10.5 3.5"
              stroke="#24ae7c"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
        </svg>
      ),
      doctor: "Dr. Hardik Sharma",
      docImg: hardik,
    },
    {
      name: "Natali Craig",
      date: "Jan 6, 2022",
      status: "Pending",
      statusIcon: (
        <svg
          className=""
          width="12"
          height="12"
          viewBox="0 0 50 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Icon"
            d="M24.0002 16.9998L18.303 12.2522C17.4565 11.5468 17.0333 11.1941 16.729 10.7618C16.4594 10.3787 16.2592 9.95122 16.1375 9.49888C16.0002 8.98835 16.0002 8.43743 16.0002 7.33557V3.6665M24.0002 16.9998L29.6973 12.2522C30.5438 11.5468 30.967 11.1941 31.2713 10.7618C31.5409 10.3787 31.7411 9.95122 31.8628 9.49888C32.0002 8.98835 32.0002 8.43743 32.0002 7.33557V3.6665M24.0002 16.9998L18.303 21.7475C17.4565 22.4529 17.0333 22.8056 16.729 23.2379C16.4594 23.621 16.2592 24.0484 16.1375 24.5008C16.0002 25.0113 16.0002 25.5622 16.0002 26.6641V30.3332M24.0002 16.9998L29.6973 21.7475C30.5438 22.4529 30.967 22.8056 31.2713 23.2379C31.5409 23.621 31.7411 24.0484 31.8628 24.5008C32.0002 25.0113 32.0002 25.5622 32.0002 26.6641V30.3332M13.3335 3.6665H34.6668M13.3335 30.3332H34.6668"
            stroke="#79B5EC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      doctor: "Dr Alyana Cruz",
      docImg: alyana,
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [cancelModalodalIsOpen, setCancelModalIsOpen] = useState(true);
  const [physician, setPhysician] = useState("Select your Physician");
  const [physicianImg, setPhysicianImg] = useState(doctors[0].img);
  const [physicianIncluded, setPhysicianIncluded] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");
  const [cancelReason, setCancelReason] = useState("");
  const [appointmentDateIncluded, setAppointmentDateIncluded] = useState(false);
  const [allIncluded, setAllIncluded] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [apptIsScheduled, setApptIsScheduled] = useState(false);

  function handleSelectPhysician(val, img) {
    setPhysician(val);
    setPhysicianImg(img);
  }

  function handleDropdown() {
    setDropdownIsOpen((prev) => !prev);
  }

  function handleAppointment() {
    if (!appointmentDate) setAppointmentDateIncluded(true);
    else setAppointmentDateIncluded(false);
    if (physician !== "Select your Physician" && appointmentDate) {
      setPhysicianIncluded(false);
      setAllIncluded(true);
      setApptIsScheduled(true);
      toggleScheduleModal();
    } else {
      setPhysicianIncluded(true);
    }
  }

  function handleCancelAppt() {
    if (cancelReason.length > 5) toggleCancelModal();
  }

  const createAbbv = (name) => {
    return name
      .split(" ")
      .map((name) => name[0])
      .join("");
  };

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const toggleScheduleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const toggleCancelModal = () => {
    setCancelModalIsOpen((prev) => !prev);
  };

  return (
    <div>
      <header className=" relative -top-[60px] right-0 px-10 md:px-20 lg:px-[110px] py-6 bg-[#0d0f10] h-20 mx-3 rounded-3xl">
        <div className="flex items-center justify-end">
          <div className="w-8 h-8 mr-2">
            <img src={adminImg} alt="a doctor" className="w-full" />
          </div>
          <span className="text-center text-white text-base font-semibold font-plusJakarta leading-normal tracking-tight">
            Admin
          </span>
        </div>
      </header>
      <div className="px-10 md:px-20 lg:px-[110px]">
        <div className="">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-4xl font-bold leading-[44px]">
              Welcome, Admin
            </h1>
            <span className="text-[#abb7c3] text-base font-medium leading-normal tracking-tight">
              Start day with managing new appointments
            </span>
          </div>

          <div className="text-white mt-[42px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-6 bg-[#1c1f23] rounded-xl border-t border-white/10 flex-col justify-center items-start gap-6 inline-flex overflow-auto shadow-lg shadow-[#1c1f29]/50 ">
              <div className="flex items-center justify-center ">
                <div>
                  <svg
                    className=""
                    width="54"
                    height="54"
                    viewBox="0 0 50 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38 14.3332H14M38 17.6665V12.7332C38 10.493 38 9.37286 37.564 8.51721C37.1805 7.76456 36.5686 7.15264 35.816 6.76914C34.9603 6.33317 33.8402 6.33317 31.6 6.33317H20.4C18.1598 6.33317 17.0397 6.33317 16.184 6.76914C15.4314 7.15264 14.8195 7.76456 14.436 8.51721C14 9.37286 14 10.493 14 12.7332V23.9332C14 26.1734 14 27.2935 14.436 28.1491C14.8195 28.9018 15.4314 29.5137 16.184 29.8972C17.0397 30.3332 18.1598 30.3332 20.4 30.3332H26M31.3333 3.6665V8.99984M20.6667 3.6665V8.99984M29.3333 26.3332L32 28.9998L38 22.9998"
                      stroke="#FFD147"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <span className="text-[32px] font-bold leading-10 tracking-tight">
                  94
                </span>
              </div>
              <span className=" text-base font-semibold leading-normal tracking-tight">
                Total number of scheduled appointments
              </span>
              <img
                src={calendarCheckGlow}
                alt="glow"
                className=" absolute -ml-6 -mb-2"
              />
            </div>
            <div className="p-6 bg-[#1c1f23] rounded-xl border-t border-white/10 flex-col justify-center items-start gap-6 inline-flex overflow-auto shadow-lg shadow-[#1c1f29]/50 ">
              <div className="flex items-center justify-center ">
                <div>
                  <svg
                    className=""
                    width="54"
                    height="54"
                    viewBox="0 0 50 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Icon"
                      d="M24.0002 16.9998L18.303 12.2522C17.4565 11.5468 17.0333 11.1941 16.729 10.7618C16.4594 10.3787 16.2592 9.95122 16.1375 9.49888C16.0002 8.98835 16.0002 8.43743 16.0002 7.33557V3.6665M24.0002 16.9998L29.6973 12.2522C30.5438 11.5468 30.967 11.1941 31.2713 10.7618C31.5409 10.3787 31.7411 9.95122 31.8628 9.49888C32.0002 8.98835 32.0002 8.43743 32.0002 7.33557V3.6665M24.0002 16.9998L18.303 21.7475C17.4565 22.4529 17.0333 22.8056 16.729 23.2379C16.4594 23.621 16.2592 24.0484 16.1375 24.5008C16.0002 25.0113 16.0002 25.5622 16.0002 26.6641V30.3332M24.0002 16.9998L29.6973 21.7475C30.5438 22.4529 30.967 22.8056 31.2713 23.2379C31.5409 23.621 31.7411 24.0484 31.8628 24.5008C32.0002 25.0113 32.0002 25.5622 32.0002 26.6641V30.3332M13.3335 3.6665H34.6668M13.3335 30.3332H34.6668"
                      stroke="#79B5EC"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <span className="text-[32px] font-bold leading-10 tracking-tight">
                  94
                </span>
              </div>
              <span className=" text-base font-semibold leading-normal tracking-tight">
                Total number of scheduled appointments
              </span>
              <img
                src={hourGlassGlow}
                alt="glow"
                className=" absolute -ml-6 -mb-2"
              />
            </div>
            <div className="p-6 bg-[#1c1f23] rounded-xl border-t border-white/10 flex-col justify-center items-start gap-6 inline-flex overflow-auto shadow-lg shadow-[#1c1f29]/50 ">
              <div className="flex items-center justify-center ">
                <div>
                  <svg
                    className=""
                    width="54"
                    height="54"
                    viewBox="0 0 50 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Icon"
                      d="M27.9995 12.9998V18.3332M27.9995 23.6665H28.0128M26.1533 6.18878L15.1868 25.1309C14.5785 26.1816 14.2743 26.7069 14.3193 27.1381C14.3585 27.5141 14.5555 27.8559 14.8613 28.0782C15.2119 28.3332 15.819 28.3332 17.033 28.3332H38.966C40.1801 28.3332 40.7871 28.3332 41.1377 28.0782C41.4435 27.8559 41.6405 27.5141 41.6797 27.1381C41.7247 26.7069 41.4205 26.1816 40.8123 25.1309L29.8458 6.18878C29.2397 5.1419 28.9366 4.61845 28.5412 4.44265C28.1964 4.2893 27.8027 4.2893 27.4578 4.44265C27.0624 4.61845 26.7594 5.1419 26.1533 6.18878Z"
                      stroke="#FF4F4E"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <span className="text-[32px] font-bold leading-10 tracking-tight">
                  94
                </span>
              </div>
              <span className=" text-base font-semibold leading-normal tracking-tight">
                Total number of scheduled appointments
              </span>
              <img
                src={alertTriangleGlow}
                alt="glow"
                className=" absolute -ml-6 -mb-2"
              />
            </div>
          </div>
        </div>
        <div className=" w-full mt-[62px] ">
          <div className="border-[#1a1d21] border-2 rounded-t-xl">
            <div className=" w-full text-[#cdcecf] text-xs grid lg:grid-cols-5 px-6 py-[18px] bg-[#0d0f10] border-b grid-cols-4 border-[#1a1d21] rounded-t-xl">
              <span>Patient</span>
              <span>Date</span>
              <span>Status</span>
              <span>Doctor</span>
              <span className="hidden lg:block">Actions</span>
            </div>

            {info.map((patient, i) => (
              <div
                className={`text-[#e8e9e9] text-sm font-semibold grid grid-cols-4 lg:grid-cols-5 px-6 py-4 items-center ${
                  i % 2 !== 0 ? "bg-[#1c2023]" : ""
                }`}
              >
                <div className="flex gap-3 items-center">
                  <div
                    className="rounded-full w-11 h-11 text-[#0d0f10] text-sm font-medium flex items-center justify-center "
                    style={{ backgroundColor: generateRandomColor() }}
                  >
                    {createAbbv(patient.name)}
                  </div>
                  <span className="hidden lg:block">{patient.name}</span>
                </div>
                <span className="font-normal">{patient.date}</span>
                <div>
                  <div
                    className={`inline-flex pl-1.5 pr-2 py-0.5 rounded-2xl gap-1 justify-start items-center ${
                      patient.status === "Scheduled"
                        ? "text-[#24AE7C] bg-[#0d291f]"
                        : patient.status === "Pending"
                        ? "text-[#79b4ec] bg-[#152331]"
                        : "text-[#f27776] bg-[#3e1716]"
                    }`}
                  >
                    <div>{patient.statusIcon}</div>
                    <span className="text-xs font-semibold">
                      {patient.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="">
                    <img
                      src={patient.docImg}
                      alt="A doctor"
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="text-nowrap hidden lg:block">
                    {patient.doctor}
                  </span>
                </div>
                <div className="lg:flex gap-[14px] hidden ">
                  <button
                    className="text-[#24ae7c] hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleScheduleModal();
                    }}
                  >
                    Schedule
                  </button>
                  <button
                    className="text-[#fbecec] hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleCancelModal();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`text-white overflow-hidden flex justify-center items-center fixed inset-0 bg-[#060708] bg-opacity-70 backdrop-blur-sm z-50 ${
            !modalIsOpen ? "" : "hidden"
          }`}
        >
          <div className="w-[44%]  px-10 pt-10 pb-[50px] bg-[#1a1d21]/95 rounded-2xl shadow-[0px_24px_64px_-16px_rgba(0,0,0,0.24)] border-t border-white/10 flex-col justify-start inline-flex">
            <div className="flex justify-between mb-5">
              <span className="text-white text-2xl font-semibold">
                Schedule Appointment{" "}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleScheduleModal();
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="cross">
                    <path
                      id="icon"
                      d="M4.16669 4.1665L15.8334 15.8332M15.8334 4.1665L4.16669 15.8332"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <span className="text-[#abb8c4] text-base font-medium">
              Please fill in the following details to schedule
            </span>

            <form className="flex flex-col" autoComplete="on">
              <section className="mt-10 flex flex-col gap-6">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer relative"
                  id="name"
                >
                  Doctor
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full">
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdown();
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 20L16.889 16.8889M19.1111 11.5556C19.1111 15.7284 15.7284 19.1111 11.5556 19.1111C7.38274 19.1111 4 15.7284 4 11.5556C4 7.38274 7.38274 4 11.5556 4C15.7284 4 19.1111 7.38274 19.1111 11.5556Z"
                            stroke="#CDE9DF"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div
                        className="bg-transparent text-white font-normal text-base w-full flex justify-between items-center"
                        onClick={() => handleDropdown()}
                      >
                        <div className="px-3 py-1 bg-gradient-to-br from-[#d7ecec] from-[-650%] rounded-lg border border-white/10 justify-start items-center gap-1.5 inline-flex">
                          <div className="border rounded-full h-6 w-6 flex justify-center items-center">
                            <img
                              src={physicianImg}
                              className="w-full"
                              alt="a doctor"
                            />
                          </div>

                          <span>{physician}</span>
                        </div>
                        <div
                          className="hover:border-white hover:border-2 hover:rounded-lg flex justify-center items-center"
                          onClick={() => handleDropdown()}
                        >
                          {!dropdownIsOpen ? (
                            <svg
                              className="rotate-180"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="chevron-down">
                                <path
                                  id="icon"
                                  d="M18 10L12.7071 15.2929C12.3166 15.6834 11.6834 15.6834 11.2929 15.2929L6 10"
                                  stroke="#B6F09C"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="chevron-down">
                                <path
                                  id="icon"
                                  d="M18 10L12.7071 15.2929C12.3166 15.6834 11.6834 15.6834 11.2929 15.2929L6 10"
                                  stroke="#B6F09C"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {dropdownIsOpen && (
                    <ul className="border absolute w-full bg-[#1a1d21] border-white/10 rounded-lg">
                      {doctors.map((doctor, i) => (
                        <li
                          key={[i]}
                          onClick={(e) => {
                            e.preventDefault();

                            handleSelectPhysician(doctor.name, doctor.img);
                            handleDropdown();
                            setPhysicianIncluded(false);
                            console.log(physician, physicianImg);
                          }}
                          className="p-3 hover:bg-gradient-to-br from-[#d7ecec] from-[-650%] hover:border border-white/10 justify-start items-center gap-4 inline-flex w-full 
                        "
                        >
                          {" "}
                          <div className="border rounded-full h-8 w-8 flex justify-center items-center">
                            <img src={doctor.img} alt="" />
                          </div>
                          <span>{doctor.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !physicianIncluded ? "hidden" : "block"
                  }`}
                >
                  Please select your Physician.
                </span>
                <div className="w-full">
                  <div className="flex flex-col gap-6 w-full">
                    <label
                      className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                      id="email"
                    >
                      Reason for appointment
                      <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                        <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="bg-transparent text-white font-normal text-base w-full h-24"
                            onChange={(e) =>
                              setAppointmentReason(e.target.value)
                            }
                            placeholder="ex: Annual montly check-up"
                          ></textarea>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-6">
                  <label
                    className="text-[#abb7c3] w-full text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                    id="email"
                  >
                    Expected appointment date
                    <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                      <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 10.2H4M15.5556 3V6.6M8.44444 3V6.6M8.26667 21H15.7333C17.2268 21 17.9735 21 18.544 20.7057C19.0457 20.4469 19.4537 20.0338 19.7094 19.5258C20 18.9482 20 18.1921 20 16.68V9.12C20 7.60786 20 6.85179 19.7094 6.27423C19.4537 5.76619 19.0457 5.35314 18.544 5.09428C17.9735 4.8 17.2268 4.8 15.7333 4.8H8.26667C6.77319 4.8 6.02646 4.8 5.45603 5.09428C4.95426 5.35314 4.54631 5.76619 4.29065 6.27423C4 6.85179 4 7.60786 4 9.12V16.68C4 18.1921 4 18.9482 4.29065 19.5258C4.54631 20.0338 4.95426 20.4469 5.45603 20.7057C6.02646 21 6.77319 21 8.26667 21Z"
                              stroke="#CDE9DF"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <input
                          type="datetime-local"
                          id="appointmentDate"
                          value={appointmentDate}
                          placeholder="Select your appointment date"
                          onChange={(e) => {
                            setAppointmentDate(e.target.value);
                            setAppointmentDateIncluded(false);
                          }}
                          className="bg-transparent text-white font-normal text-base w-full"
                        />
                      </div>
                    </div>
                  </label>
                  <span
                    className={`text-[#f14e42] text-right ${
                      !appointmentDateIncluded ? "hidden" : "block"
                    }`}
                  >
                    Please enter your date of birth.
                  </span>
                </div>
              </section>

              <input
                onClick={(e) => {
                  e.preventDefault();
                  handleAppointment();
                  toggleScheduleModal();
                }}
                type="submit"
                value="Schedule appointment"
                className="bg-[#24AE7C] px-6 py-3 text-white hover:bg-[#0E8784] min-w-20 mx-auto md:w-full mt-10 rounded-lg justify-center items-center text-base font-semibold leading-normal tracking-tight "
              />
            </form>
          </div>
        </div>
        <div
          className={`text-white overflow-hidden flex justify-center items-center fixed inset-0 bg-[#060708] bg-opacity-70 backdrop-blur-sm z-50 ${
            !cancelModalodalIsOpen ? "" : "hidden"
          }`}
        >
          <div className="w-[44%]  px-10 pt-10 pb-[50px] bg-[#1a1d21]/95 rounded-2xl shadow-[0px_24px_64px_-16px_rgba(0,0,0,0.24)] border-t border-white/10 flex-col justify-start inline-flex">
            <div className="flex justify-between mb-5">
              <span className="text-white text-2xl font-semibold">
                Cancel Appointment{" "}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleCancelModal();
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="cross">
                    <path
                      id="icon"
                      d="M4.16669 4.1665L15.8334 15.8332M15.8334 4.1665L4.16669 15.8332"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <span className="text-[#abb8c4] text-base font-medium">
              Are you sure you want to cancel your appointment
            </span>

            <form className="flex flex-col mt-10" autoComplete="on">
              <label
                className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                id="email"
              >
                Reason for cancellation
                <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                  <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="bg-transparent text-white font-normal text-base w-full h-24"
                      onChange={(e) => setCancelReason(e.target.value)}
                      placeholder="ex: Urgent meeting came up"
                    ></textarea>
                  </div>
                </div>
              </label>
              {cancelReason.length < 5 && (
                <span
                  className={`text-[#f14e42] mt-2 text-right 
               block
                
                `}
                >
                  Please state reason for cancellation.
                </span>
              )}

              <input
                onClick={(e) => {
                  e.preventDefault();
                  handleCancelAppt();
                }}
                type="submit"
                value="Schedule appointment"
                className="bg-[#f14e42] px-6 py-3 text-white hover:bg-[#f14e30] min-w-20 mx-auto md:w-full mt-10 rounded-lg justify-center items-center text-base font-semibold leading-normal tracking-tight "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
