import React from "react";
import { useState } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import doc1 from "../assets/png/sarah.png";
import doc2 from "../assets/png/ava.png";
import doc3 from "../assets/png/adam.png";

const ScheduleAppointment = ({ userInfo }) => {
  const [allIncluded, setAllIncluded] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
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
  ];
  const [physician, setPhysician] = useState("Select your Physician");
  const [physicianImg, setPhysicianImg] = useState(doctors[0].img);
  const [physicianIncluded, setPhysicianIncluded] = useState(false);
  const [appointmentReason, setAppointmentReason] = useState("");
  const [comments, setComments] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentDateIncluded, setAppointmentDateIncluded] = useState(false);
  const navigate = useNavigate();

  function handleSelectPhysician(val, img) {
    setPhysician(val);
    setPhysicianImg(img);
  }

  function handleDropdown() {
    !dropdownIsOpen ? setDropdownIsOpen(true) : setDropdownIsOpen(false);
  }

  function handleAppointment() {
    if (!appointmentDate) setAppointmentDateIncluded(true);
    else setAppointmentDateIncluded(false);
    if (physician !== "Select your Physician" && appointmentDate) {
      setPhysicianIncluded(false);
      setAllIncluded(true);
      navigate("/login");
    } else {
      setPhysicianIncluded(true);
    }
  }

  return (
    <div className="text-white mt-[76px]">
      <div className="px-10 md:px-20 lg:px-[110px]">
        <h1>kjhgj</h1>
        <form className="flex flex-col gap-6" autoComplete="on">
          <section className="mt-[36px] flex flex-col gap-6">
            <h2 className=" text-xl md:text-3xl font-bold leading-9 mb-9">
              Medical Information
            </h2>
            <label
              className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
              id="name">
              Primary care physician
              <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                  <div onClick={() => handleDropdown()}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
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
                    onClick={() => handleDropdown()}>
                    <div className="px-3 py-1 bg-gradient-to-br from-[#d7ecec] from-[-650%] rounded-lg border border-white/10 justify-start items-center gap-1.5 inline-flex">
                      <div className="border rounded-full h-6 w-6 flex justify-center items-center">
                        <img src={physicianImg} className="w-full" />
                      </div>

                      <span>{physician}</span>
                    </div>
                    <div
                      className="hover:border-white hover:border-2 hover:rounded-lg flex justify-center items-center"
                      onClick={() => handleDropdown()}>
                      {!dropdownIsOpen ? (
                        <svg
                          className="rotate-180"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
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
                          xmlns="http://www.w3.org/2000/svg">
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
                <ul className="border border-white/10 rounded-lg">
                  {doctors.map((doctor, i) => (
                    <li
                      key={[i]}
                      onClick={() => {
                        handleSelectPhysician(doctor.name, doctor.img);
                        handleDropdown();
                        setPhysicianIncluded(false);
                      }}
                      className="p-3 hover:bg-gradient-to-br from-[#d7ecec] from-[-650%] hover:border border-white/10 justify-start items-center gap-4 inline-flex w-full 
                        ">
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
              }`}>
              Please select your Physician.
            </span>
            <div className="flex flex-col md:flex-row w-full gap-6">
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="email">
                  Reason for appointment
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="bg-transparent text-white font-normal text-base w-full h-24"
                        onChange={(e) => setAppointmentReason(e.target.value)}
                        placeholder="ex: Annual montly check-up"></textarea>
                    </div>
                  </div>
                </label>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="number">
                  Additional comments/notes
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="bg-transparent text-white font-normal text-base w-full h-24"
                        onChange={(e) => setComments(e.target.value)}
                        placeholder="ex: Prefer afternoon appointments, if possible"></textarea>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-6">
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="email">
                  Expected appointment date
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
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
                        type="date"
                        id="appointmentDate"
                        value={appointmentDate}
                        onChange={(e) => {
                          setAppointmentDate(e.target.value);
                          setAppointmentDateIncluded(false);
                        }}
                        placeholder="Select your birth date"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
                    </div>
                  </div>
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !appointmentDateIncluded ? "hidden" : "block"
                  }`}>
                  Please enter your date of birth.
                </span>
              </div>
            </div>
          </section>

          <input
            onClick={(e) => {
              e.preventDefault();
              if (!allIncluded)
                userInfo.push({
                  doctor: physician,
                  doctorImg: physicianImg,
                  appointmentReason: appointmentReason,
                  comments: comments,
                  appointmentDate: appointmentDate,
                });
              console.log(userInfo);
              handleAppointment();
            }}
            type="submit"
            value="Submit and continue"
            className="bg-[#24AE7C] px-6 py-3 text-white hover:bg-[#0E8784] min-w-20 mx-auto md:w-full mt-12 rounded-lg justify-center items-center text-base font-semibold leading-normal tracking-tight "
          />
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
