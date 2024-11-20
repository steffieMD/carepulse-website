import React from "react";
import { useState } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import doc1 from "../assets/png/sarah.png";
import doc2 from "../assets/png/ava.png";
import doc3 from "../assets/png/adam.png";

const PatientForm = ({ userInfo }) => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [dobIncluded, setDobIncluded] = useState(false);
  const [nameIncluded, setNameIncluded] = useState(false);
  const [emailIncluded, setEmailIncluded] = useState(false);
  const [numIncluded, setNumIncluded] = useState(false);
  const [genderIncluded, setGenderIncluded] = useState(false);
  const [addressIncluded, setAddressIncluded] = useState(false);
  const [occupationIncluded, setOccupationIncluded] = useState(false);
  const [contactNameIncluded, setContactNameIncluded] = useState(false);
  const [contactNumberIncluded, setContactNumberIncluded] = useState(false);
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

  const id = [
    "Birth Certificate",
    "Internationa Passport",
    "Driver's License",
    "Social Security Card",
    "Permanent Resident Card",
  ];
  const [physician, setPhysician] = useState("");
  const [physicianImg, setPhysicianImg] = useState(doctors[0].img);
  const [physicianIncluded, setPhysicianIncluded] = useState(false);
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [insurancePolicyNum, setInsurancePolicyNum] = useState("");
  const [allergies, setAllergies] = useState("");
  const [meds, setMeds] = useState("");
  const [famHx, setFamHx] = useState("");
  const [pmh, setPmh] = useState("");
  const [idType, setIdType] = useState("");
  const [idNum, setIdNum] = useState("");
  const [file, setFile] = useState("");
  const [fileIncluded, setFileIncluded] = useState("");
  const [idTypeIncluded, setIdTypeIncluded] = useState("");
  const [idNumIncluded, setIdNumIncluded] = useState("");
  const [consent1, setconsent1] = useState(false);
  const [consent2, setconsent2] = useState(false);
  const [consent3, setconsent3] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const navigate = useNavigate();

  const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

  function handleSelectPhysician(val, img) {
    setPhysician(val);
    setPhysicianImg(img);
  }

  function handleDropdown() {
    !dropdownIsOpen ? setDropdownIsOpen(true) : setDropdownIsOpen(false);
  }

  function handleSignUp() {
    if (name.length < 1) {
      setNameIncluded(true);
    } else setNameIncluded(false);
    if (!dob) setDobIncluded(true);
    else setDobIncluded(false);
    if (!filter.test(email)) {
      setEmailIncluded(true);
    } else setEmailIncluded(false);
    if (number.length < 10 || number.length > 15) {
      setNumIncluded(true);
    } else setNumIncluded(false);
    if (!gender) setGenderIncluded(true);
    else setGenderIncluded(false);
    if (address.length < 3) setAddressIncluded(true);
    else setAddressIncluded(false);
    if (occupation.length < 3) setOccupationIncluded(true);
    else setOccupationIncluded(false);
    if (contactName.length < 1) {
      setContactNameIncluded(true);
    } else setContactNameIncluded(false);
    if (contactNumber.length < 10 || contactNumber.length > 15) {
      setContactNumberIncluded(true);
    } else setContactNumberIncluded(false);
    if (!physician) setPhysicianIncluded(true);
    else setPhysicianIncluded(false);
    if (!idType) setIdTypeIncluded(true);
    else setIdTypeIncluded(false);
    if (!idNum) setIdNumIncluded(true);
    else setIdNumIncluded(false);
    if (!consent1 && !consent2 && !consent3) setConsentGiven(true);
    else if (consent1 && consent2 && consent3) setConsentGiven(false);

    if (
      consent1 &&
      consent2 &&
      consent3 &&
      contactName.length > 1 &&
      contactNumber.length > 10 &&
      contactNumber.length < 16 &&
      contactNumber !== number &&
      occupation.length >= 3 &&
      address.length >= 3 &&
      gender &&
      dob &&
      name.length > 1 &&
      filter.test(email) &&
      number.length > 10 &&
      number.length < 16 &&
      physician &&
      idType &&
      idNum
    ) {
      setAllIncluded(true);
      navigate("/scheduleappointment");
    } else if (contactNumber === number) {
      setContactNumberIncluded(true);
    }
  }

  return (
    <div className="text-white mt-[76px]">
      <div className="px-10 md:px-20 lg:px-[110px]">
        <h1 className="text-2xl md:text-4xl font-bold leading-[44px] mb-[10px]">
          Welcome 👋
        </h1>
        <span className="text-[#abb7c3] text-base font-medium leading-normal tracking-tight">
          Let us know more about yourself
        </span>

        <form className="flex flex-col gap-6" autoComplete="on">
          <section className="mt-[43px] flex flex-col gap-6">
            <h2 className=" text-xl md:text-3xl font-bold leading-9 mb-9">
              Personal Information
            </h2>

            <label
              className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
              id="name">
              Full name
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
                        d="M19 21C19 17.6863 16.3137 15 13 15H11C7.68629 15 5 17.6863 5 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="#CDE9DF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameIncluded(false);
                    }}
                    placeholder="ex: Stephanie Julius"
                    className="bg-transparent text-white font-normal text-base w-full"
                  />
                </div>
              </div>
            </label>
            <span
              className={`text-[#f14e42] text-right ${
                !nameIncluded ? "hidden" : "block"
              }`}>
              Please enter your name.
            </span>
            <div className="flex flex-col md:flex-row w-full gap-6">
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="email">
                  Email address
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
                            d="M4 6L10 12M20 6L14 12M10 12L10.5858 12.5858C11.3668 13.3668 12.6332 13.3668 13.4142 12.5858L14 12M10 12L3.87868 18.1213M14 12L20.1213 18.1213M20.1213 18.1213C20.6642 17.5784 21 16.8284 21 16V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V16C3 16.8284 3.33579 17.5784 3.87868 18.1213M20.1213 18.1213C19.5784 18.6642 18.8284 19 18 19H6C5.17157 19 4.42157 18.6642 3.87868 18.1213"
                            stroke="#CDE9DF"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>

                      <input
                        type="email"
                        id="email"
                        pattern=".+@example\.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailIncluded(false);
                        }}
                        placeholder="youremail@email.com"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
                    </div>
                  </div>
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !emailIncluded ? "hidden" : "block"
                  }`}>
                  Please enter your correct email.
                </span>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="number">
                  Phone number
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <g id="Lead Icon">
                            <path
                              id="icon"
                              d="M13.9157 20.2681L11.8489 18.8627C9.20932 17.0678 6.93225 14.7907 5.1373 12.1511L3.73188 10.0843C2.47798 8.24028 2.87204 5.73943 4.63223 4.3704L5.53514 3.66814C6.98923 2.53718 9.09777 2.87934 10.1196 4.41209L10.5588 5.07092C10.9656 5.68114 11.0143 6.46257 10.6863 7.11854C10.0829 8.32531 10.1139 9.7521 10.7692 10.9315L10.9339 11.2281C11.363 12.0004 11.9996 12.637 12.7719 13.0661L13.0685 13.2308C14.2479 13.8861 15.6747 13.9171 16.8815 13.3137C17.5374 12.9857 18.3189 13.0344 18.9291 13.4412L19.5879 13.8804C21.1207 14.9022 21.4628 17.0108 20.3319 18.4649L19.6296 19.3678C18.2606 21.128 15.7597 21.522 13.9157 20.2681Z"
                              stroke="#CDE9DF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </g>
                        </svg>
                      </div>

                      <input
                        type="tel"
                        id="number"
                        value={number}
                        minLength={8}
                        maxLength={15}
                        onChange={(e) => {
                          setNumber(e.target.value);
                          setNumIncluded(false);
                        }}
                        placeholder="ex: +1 (868) 579-9831"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
                    </div>
                  </div>
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !numIncluded ? "hidden" : "block"
                  }`}>
                  Please enter your correct phone number.
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-6">
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="email">
                  Date of birth
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
                        id="dob"
                        value={dob}
                        onChange={(e) => {
                          setDob(e.target.value);
                          setDobIncluded(false);
                        }}
                        placeholder="Select your birth date"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
                    </div>
                  </div>
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !dobIncluded ? "hidden" : "block"
                  }`}>
                  Please enter your date of birth.
                </span>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="number">
                  Gender
                  <div className="grid grid-cols-2 md:flex gap-4">
                    <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2 w-full">
                      <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="Male"
                          onClick={(e) => {
                            setGender(e.target.value);
                            setGenderIncluded(false);
                          }}
                          className="bg-transparent text-white font-normal text-base"
                        />
                        <label htmlFor="male">Male</label>
                      </div>
                    </div>
                    <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2 w-full">
                      <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="Female"
                          onClick={(e) => setGender(e.target.value)}
                          className="bg-transparent text-white font-normal text-base"
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                    </div>
                    <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2 w-full">
                      <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          value="Other"
                          onClick={(e) => setGender(e.target.value)}
                          className="bg-transparent text-white font-normal text-base"
                        />
                        <label htmlFor="other">Other</label>
                      </div>
                    </div>
                  </div>
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !genderIncluded ? "hidden" : "block"
                  }`}>
                  Please enter select your gender.
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-6">
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="email">
                  Address
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          setAddressIncluded(false);
                        }}
                        placeholder="ex: 14 street, New York, NY - 5101"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
                    </div>
                  </div>
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !addressIncluded ? "hidden" : "block"
                  }`}>
                  Please enter your correct address.
                </span>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="number">
                  Occupation
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <input
                        type="text"
                        id="occupation"
                        value={occupation}
                        minLength={8}
                        maxLength={15}
                        onChange={(e) => {
                          setOccupation(e.target.value);
                          setOccupationIncluded(false);
                        }}
                        placeholder="Software developer"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
                    </div>
                  </div>
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !occupationIncluded ? "hidden" : "block"
                  }`}>
                  Please enter your occupation.
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-6">
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="email">
                  Emergency contact name
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <input
                        type="text"
                        id="contactname"
                        value={contactName}
                        onChange={(e) => {
                          setContactName(e.target.value);
                          setContactNameIncluded(false);
                        }}
                        placeholder="Guardian’s name"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
                    </div>
                  </div>
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !contactNameIncluded ? "hidden" : "block"
                  }`}>
                  Please enter the name of your Emergency contact.
                </span>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="number">
                  Phone number
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <g id="Lead Icon">
                            <path
                              id="icon"
                              d="M13.9157 20.2681L11.8489 18.8627C9.20932 17.0678 6.93225 14.7907 5.1373 12.1511L3.73188 10.0843C2.47798 8.24028 2.87204 5.73943 4.63223 4.3704L5.53514 3.66814C6.98923 2.53718 9.09777 2.87934 10.1196 4.41209L10.5588 5.07092C10.9656 5.68114 11.0143 6.46257 10.6863 7.11854C10.0829 8.32531 10.1139 9.7521 10.7692 10.9315L10.9339 11.2281C11.363 12.0004 11.9996 12.637 12.7719 13.0661L13.0685 13.2308C14.2479 13.8861 15.6747 13.9171 16.8815 13.3137C17.5374 12.9857 18.3189 13.0344 18.9291 13.4412L19.5879 13.8804C21.1207 14.9022 21.4628 17.0108 20.3319 18.4649L19.6296 19.3678C18.2606 21.128 15.7597 21.522 13.9157 20.2681Z"
                              stroke="#CDE9DF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </g>
                        </svg>
                      </div>

                      <input
                        type="tel"
                        id="number"
                        value={contactNumber}
                        minLength={8}
                        maxLength={15}
                        onChange={(e) => {
                          setContactNumber(e.target.value);
                          setContactNumberIncluded(false);
                        }}
                        placeholder="ex: +1 (868) 579-9831"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
                    </div>
                  </div>
                </label>
                <span
                  className={`text-[#f14e42] text-right ${
                    !contactNumberIncluded || contactNumber !== number
                      ? "hidden"
                      : "block"
                  }`}>
                  {number === contactNumber && contactNumber.length > 10
                    ? "Phone number and emergency contact number can not be the same!"
                    : " Please enter the correct phone number of your emergency contact."}
                </span>
              </div>
            </div>
          </section>

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

                      <span>
                        {" "}
                        {!physician
                          ? "Please select your Physician"
                          : physician}
                      </span>
                    </div>
                    <div
                      className="hover:border-white hover:border-2 hover:rounded-lg"
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
                  Insurance provider
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <input
                        type="text"
                        id="address"
                        value={insuranceProvider}
                        onChange={(e) => {
                          setInsuranceProvider(e.target.value);
                        }}
                        placeholder="ex: BlueCross"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
                    </div>
                  </div>
                </label>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="number">
                  Insurance policy number
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <input
                        type="text"
                        id="occupation"
                        value={insurancePolicyNum}
                        minLength={8}
                        maxLength={15}
                        onChange={(e) => {
                          setInsurancePolicyNum(e.target.value);
                        }}
                        placeholder="ex: ABC1234567"
                        className="bg-transparent text-white font-normal text-base w-full"
                      />
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
                  Allergies (if any)
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="bg-transparent text-white font-normal text-base w-full h-24"
                        onChange={(e) => setAllergies(e.target.value)}
                        placeholder="ex: Peanuts, Penicillin, Pollen"></textarea>
                    </div>
                  </div>
                </label>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="number">
                  Current medications
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="bg-transparent text-white font-normal text-base w-full h-24"
                        onChange={(e) => setMeds(e.target.value)}
                        placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"></textarea>
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
                  Family medical history (if relevant)
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="bg-transparent text-white font-normal text-base w-full h-24"
                        onChange={(e) => setFamHx(e.target.value)}
                        placeholder="ex: Mother had breast cancer"></textarea>
                    </div>
                  </div>
                </label>
              </div>
              <div className="flex flex-col gap-6 md:w-1/2">
                <label
                  className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
                  id="number">
                  Past medical history
                  <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                    <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="bg-transparent text-white font-normal text-base w-full h-24"
                        onChange={(e) => setPmh(e.target.value)}
                        placeholder="ex: Asthma diagnosis in childhood"></textarea>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </section>

          <section className="mt-[36px] flex flex-col gap-6">
            <h2 className=" text-xl md:text-3xl font-bold leading-9 mb-9">
              Identification and Verfication
            </h2>
            <label
              className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
              id="name">
              Identification type
              <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                  <div
                    className="bg-transparent text-white font-normal text-base w-full flex justify-between items-center"
                    onClick={() => handleDropdown()}>
                    <span> {!idType ? "Choose an ID type" : idType}</span>
                    <div
                      className="hover:border-white hover:border-2 hover:rounded-lg"
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
                  {id.map((idt, i) => (
                    <li
                      key={[i]}
                      onClick={() => {
                        setIdType(idt);
                        handleDropdown();
                        setIdTypeIncluded(false);
                      }}
                      className="p-3 hover:bg-gradient-to-br from-[#d7ecec] from-[-650%] hover:border border-white/10 justify-start items-center gap-4 inline-flex w-full 
                        ">
                      {" "}
                      <span>{idt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </label>
            <span
              className={`text-[#f14e42] text-right ${
                !idTypeIncluded ? "hidden" : "block"
              }`}>
              Please select your means of Identification.
            </span>
            <label
              className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
              id="name">
              Identification Number
              <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full ">
                  <input
                    type="text"
                    id="idnum"
                    value={idNum}
                    onChange={(e) => {
                      setIdNum(e.target.value);
                      setIdNumIncluded(false);
                    }}
                    placeholder="ex: 1234567"
                    className="bg-transparent text-white font-normal text-base w-full"
                  />
                </div>
              </div>
            </label>
            <span
              className={`text-[#f14e42] text-right ${
                !idNumIncluded ? "hidden" : "block"
              }`}>
              Please enter your Identification number.
            </span>
            <label
              className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight cursor-pointer"
              htmlFor="dropzone-file">
              Scanned Copy of Identification Document
              <div className="hover:bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] mt-4  rounded-lg p-px  hover:bottom-2">
                {!file ? (
                  <div className=" text-base font-medium leading-normal tracking-tight  px-4 py-5 bg-[#1a1d21] rounded-lg border border-[#363a3d] items-center justify-center gap-3 inline-flex w-full ">
                    <div className="flex flex-col items-center justify-center ">
                      <div className="p-2.5 bg-[#2d3136] rounded-[28px] justify-center items-center inline-flex mb-3">
                        {" "}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.66663 13.3333L9.99996 10M9.99996 10L13.3333 13.3333M9.99996 10V17.5M16.6666 13.9524C17.6845 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3975 5.73833 13.3051 5.58145C12.2183 3.73736 10.212 2.5 7.91663 2.5C4.46485 2.5 1.66663 5.29822 1.66663 8.75C1.66663 10.4718 2.36283 12.0309 3.48908 13.1613"
                            stroke="#24AE7C"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <p class="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold text-[#24AE7C]">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                      value={file}
                      onChange={(e) => {
                        setFile(e.target.value);
                        setFileIncluded(false);
                      }}
                    />
                  </div>
                ) : (
                  file
                )}
              </div>
            </label>
            <span
              className={`text-[#f14e42] text-right ${
                !fileIncluded ? "hidden" : "block"
              }`}>
              Please enter your name.
            </span>
          </section>

          <section className="mt-20 flex flex-col gap-6">
            <h2 className=" text-xl md:text-3xl font-bold leading-9 mb-3">
              Consent and Privacy
            </h2>
            <div className="flex gap-2 items-center">
              <input
                className="
        peer relative appearance-none shrink-0 w-6 h-6 border-2 border-[#363A3D] bg-[#1a1d21] rounded-sm mt-1 
        focus:outline-none focus:ring-offset-0 focus:ring-1 
        checked:bg-gradient-to-tr checked:from-[#4d62e5] checked:via-[#87dded] checked:to-[#b6f09c] checked:border-0 hover:bg-gradient-to-tr hover:from-[#4d62e5] hover:via-[#87dded] hover:to-[#8d8d8d]
      hover:border-0"
                value={consent1}
                onClick={() => setconsent1(true)}
                type="checkbox"
              />
              <svg
                className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-black outline-none mt-1 ml-1 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>

              <label htmlFor="receive-treatment">
                I consent to receive treatment for my health condition.
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                className="
        peer relative appearance-none shrink-0 w-6 h-6 border-2 border-[#363A3D] bg-[#1a1d21] rounded-sm mt-1 
        focus:outline-none focus:ring-offset-0 focus:ring-1 
        checked:bg-gradient-to-tr checked:from-[#4d62e5] checked:via-[#87dded] checked:to-[#b6f09c] checked:border-0 hover:bg-gradient-to-tr hover:from-[#4d62e5] hover:via-[#87dded] hover:to-[#8d8d8d]
      hover:border-0"
                type="checkbox"
                value={consent2}
                onClick={() => setconsent2(true)}
              />
              <svg
                className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-black outline-none mt-1 ml-1 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>

              <label htmlFor="receive-treatment">
                I consent to the use and disclosure of my health information for
                treatment purposes.
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                className="
        peer relative appearance-none shrink-0 w-6 h-6 border-2 border-[#363A3D] bg-[#1a1d21] rounded-sm mt-1 
        focus:outline-none focus:ring-offset-0 focus:ring-1 
        checked:bg-gradient-to-tr checked:from-[#4d62e5] checked:via-[#87dded] checked:to-[#b6f09c] checked:border-0 hover:bg-gradient-to-tr hover:from-[#4d62e5] hover:via-[#87dded] hover:to-[#8d8d8d]
      hover:border-0"
                type="checkbox"
                value={consent3}
                onClick={() => setconsent3(true)}
              />
              <svg
                className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-black outline-none mt-1 ml-1 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>

              <label htmlFor="receive-treatment">
                I acknowledge that I have reviewed and agree to the privacy
                policy.
              </label>
            </div>
            <span
              className={`text-[#f14e42] text-right ${
                !consentGiven ? "hidden" : "block"
              }`}>
              Please ensure that all boxes have been ticked before clicking
              "submit".
            </span>
          </section>

          <input
            onClick={(e) => {
              e.preventDefault();
              if (!allIncluded)
                userInfo.push({
                  name: name,
                  number: number,
                  email: email,
                  dob: dob,
                  gender: gender,
                  address: address,
                  occupation: occupation,
                  contactName: contactName,
                  contactNumber: contactNumber,
                  doctor: physician,
                  doctorImg: physicianImg,
                  insuranceProvider: insuranceProvider,
                  insurancePolicyNum: insurancePolicyNum,
                  allergies: allergies,
                  meds: meds,
                  famHx: famHx,
                  pmh: pmh,
                  idType: idType,
                  idNum: idNum,
                  file: file,
                });
              console.log(userInfo);
              handleSignUp();
            }}
            type="submit"
            value="Submit and continue"
            className="bg-[#24AE7C] px-6 py-3 text-white hover:bg-[#0E8784] min-w-20 mx-auto md:w-full mt-12 rounded-lg justify-center items-center text-base font-semibold leading-normal tracking-tight "
          />
        </form>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default PatientForm;
