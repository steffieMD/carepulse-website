import React from "react";
import signUpImg from "../assets/png/signup.png";
import { Link } from "../../node_modules/react-router-dom/dist/index";

//

const SignUp = () => {
  return (
    <div className="flex h-[100vh] px-10 md:pl-20 lg:pl-[110px] text-white text-left">
      <div className=" flex flex-col h-full justify-center ">
        <h1 className="mb-[18px] text-4xl font-bold leading-[44px]">
          Hi there, ....
        </h1>
        <span className="text-[#abb8c4] text-lg font-medium leading-7 tracking-tight mb-16">
          Get Started with Appointments.
        </span>
        <form action="/" className="flex flex-col gap-6">
          <label className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight">
            Full name
            <div className="mt-4 text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full">
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
                placeholder="Adrian Hajdin"
                className="bg-transparent text-white font-normal text-base w-full"
              />
            </div>
          </label>
          <label className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight ">
            Email address
            <div className="mt-4 text-base font-medium leading-normal tracking-tight px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full">
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
                type="text"
                id="name"
                placeholder="adrian@jsmastery.pr |"
                className="bg-transparent text-white font-normal text-base w-full"
              />
            </div>
          </label>
          <label className="text-[#abb7c3] text-sm font-mediu leading-tight tracking-tight ">
            Phone number
            <div className="mt-4 text-base font-medium leading-normal tracking-tight  px-4 py-3 bg-[#1a1d21] rounded-lg border border-[#363a3d] justify-start items-center gap-3 inline-flex w-full">
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
                type="text"
                id="name"
                placeholder="+00 0342 0453 34"
                className="bg-transparent text-white font-normal text-base w-full "
              />
            </div>
          </label>
        </form>
        <Link to="/" className="w-full">
          <button className="bg-[#24AE7C] py-3 text-white hover:bg-[#0E8784] w-full mt-12 rounded-lg justify-center items-center text-base font-semibold leading-normal tracking-tight capitalize">
            get Started
          </button>
        </Link>
        <div className="justify-items-end">
          <span>@carepulse copyright</span>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src={signUpImg}
          alt="Happy Doctors in ward coats and stethoscopes"
        />
      </div>
    </div>
  );
};

export default SignUp;
