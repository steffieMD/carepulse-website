import React from "react";
import { useState } from "react";

const PatientForm = (userInfo) => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [emailIncluded, setEmailIncluded] = useState(false);
  const [numIncluded, setNumIncluded] = useState(false);

  const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

  function handleSignUp() {
    if (!filter.test(email)) {
      setEmailIncluded(true);
    } else setEmailIncluded(false);
    if (number.length < 10 || number.length > 15) {
      setNumIncluded(true);
    } else setNumIncluded(false);
    if (filter.test(email) && number.length > 10 && number.length < 16)
      return null;
  }

  return (
    <div className="text-white mt-[76px]">
      <div className="px-10 md:px-20 lg:px-[110px]">
        <h1 className="text-3xl md:text-4xl font-bold leading-[44px] mb-[10px]">
          Welcome 👋
        </h1>
        <span className="">Let us know more about yourself</span>

        <h2>Personal Information</h2>

        <form className="flex flex-col gap-6" autoComplete="on">
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="+234 1234567890"
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
          <input
            onClick={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
            type="submit"
            value="log in"
            className="bg-[#24AE7C] py-3 text-white hover:bg-[#0E8784] w-full mt-12 rounded-lg justify-center items-center text-base font-semibold leading-normal tracking-tight capitalize"
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
