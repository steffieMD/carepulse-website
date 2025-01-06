import React from "react";

const Success = ({ appt }) => {
  // handlePath("/success");

  let scheduledDate = new Date(appt[appt.length - 1].appointmentDate);
  const day = scheduledDate.getDay();
  const month = scheduledDate.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = scheduledDate.getFullYear();
  const hours = scheduledDate.getHours();
  const minutes = scheduledDate.getMinutes();

  return (
    <div className="text-white flex flex-col items-center h-[80vh] justify-center">
      <div className="xl:w-[66%] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="border-2 border-[#4AC97E] inline-flex rounded-full justify-center items-center w-[70px] h-[70px] mb-[10px]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="check">
                <path
                  id="icon"
                  d="M1.5 5.9L4.14546 8.72183C4.54054 9.14324 5.20946 9.14324 5.60454 8.72183L10.5 3.5"
                  stroke="#4AC97E"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </div>
          <p className="text-center text-4xl font-bold leading-[44px] mb-6 w-[65%]">
            Your <span className="text-[#4ac97e]">appointment request</span> has
            been successfully submitted!
          </p>
          <span className="text-[#abb8c4] text-lg font-medium leading-7 tracking-tight mb-11 w-full text-center">
            We'll be in touch shortly to confirm.
          </span>
        </div>

        <div className="border-t-2 border-b-2 border-[#363a3d] w-full py-[44px] flex flex-col md:flex-row gap-[30px] justify-around items-center px-[69px]">
          <div className="">
            <span className="text-[#abb8c4] lg:text-nowrap text-2xl font-medium  leading-9">
              Requested appointment details:
            </span>
          </div>

          <div className="bg-transparent text-white font-normal text-base  flex justify-between items-center">
            <div className="px-4 py-[10px] bg-gradient-to-br from-[#d7ecec] from-[-650%] rounded-lg border border-white/10 justify-start items-center gap-1.5 inline-flex">
              <div className="border rounded-full h-6 w-6 flex justify-center items-center ">
                <img
                  src={appt[appt.length - 1].doctorImg}
                  className="w-6 h-6"
                  alt="a doctor"
                />
              </div>

              <span className="text-xs font-semibold">
                {appt[appt.length - 1].doctor}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-lg leading-7 tracking-tight">
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
            <span>{`${day} ${months[month]} ${year} - ${
              hours > 12 ? 24 - hours : hours
            }:${minutes} ${hours > 12 ? "PM" : "AM"}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
