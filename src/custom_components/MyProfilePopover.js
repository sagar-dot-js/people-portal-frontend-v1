import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GrStatusGoodSmall } from "react-icons/gr";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import Button from "../components/Button";
import { ModalContent } from "../components/Modal/Modal.style";
import Modal from "../components/Modal/Modal";
import Avatar from "../components/Avatar/Avatar";

const MyProfilePopover = () => {
  let [activeLink, setActiveLink] = useState();
  let [showModalCheckin, setShowModalCheckin] = useState();
  let [status, setStatus] = useState(false);
  const openModalCheckinModal = () => {
    setShowModalCheckin((prev) => !prev);
  };

  let linkData = [
    {
      title: "Profile Details",
      icon: <FaRegUserCircle className="text-xl" />,
      link: "/my-profile-details",
    },
    {
      title: "Status Change",
      icon: <GrStatusGoodSmall className="text-xl text-[#00B135]" />,
      link: "/my-profile-details",
    },
    {
      title: "Account Settings",
      icon: <AiOutlineSetting className="text-xl" />,
      link: "/my-profile-details",
    },
    {
      title: "Logout",
      icon: <FiLogOut className="text-xl" />,
      link: "/my-profile-details",
    },
  ];

  return (
    <div className="w-[200px] glass-bg   rounded-[16px] p-5 flex flex-col gap-7 transition-all duration-700 shadow-lg">
      <Link to="/my-profile-details">
        <div className="flex items-center gap-4 cursor-pointer">
          <FaRegUserCircle className="text-xl" /> <p>Profile Details</p>
        </div>
      </Link>
      <div className="flex items-center gap-4 cursor-pointer  ">
        {status ? (
          <BsBriefcaseFill className="text-[#00B135] text-xl" />
        ) : (
          <AiFillHome className="text-[#00B135] text-xl" />
        )}

        <div className="" onClick={() => setStatus(!status)}>
          <p>Status Change</p>
          <p className="text-[12px]">
            Currently{" "}
            <span className="text-[#00B135]">
              {status ? "In Office" : "WFH"}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <AiOutlineSetting className="text-xl" /> <p>Account Settings</p>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <FiLogOut className="text-xl" /> <p>Logout</p>
      </div>
    </div>
  );
};

export default MyProfilePopover;
