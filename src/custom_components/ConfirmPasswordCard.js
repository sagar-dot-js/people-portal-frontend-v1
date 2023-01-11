import React from "react";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button";

const ConfirmPasswordCard = ({ setIndex }) => {
  return (
    <div className="w-[650px] h-[372px] border rounded-[24px] mx-auto mt-10 shadow-md">
      <div className="h-[15%] border-b p-5">
        <p className="text-[20px] font-[700]">
          Please enter your password to continue
        </p>
      </div>
      <div className="h-[65%] p-5">
        <div className="flex gap-3 items-center">
          {" "}
          <Avatar
            type="img"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            variant="primary"
          />{" "}
          <div>
            <p className="text-[20px] text-[700]">Avinash Pawar</p>
            <p className="text-[14px] text-[#333333]">
              Recruitment Coordinator
            </p>
          </div>
        </div>
        <p className="text-[16px] py-5">
          The Page you are trying to visit requires that you re-enter your
          password.
        </p>
        <div className="h-[50px] border rounded-[8px] mb-5">
          <input
            type="text"
            placeholder="Type here"
            className="rounded-[8px] outline-none h-full w-full px-4"
          />
        </div>
        <a href="#" className="text-[#1765DC]">
          Forgot your password?
        </a>
      </div>
      <div className="h-[20%] border-t flex justify-end items-center pr-5">
        <Button onClick={(e) => setIndex(1)} variant="filled">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ConfirmPasswordCard;
