import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import SpeakerLite from "../assets/sp-white.png";
import SpeakerDark from "../assets/sp-black.png";
import Avatar from "../components/Avatar/Avatar";
import MyProfilePopover from "./MyProfilePopover";
import NotificationPopover from "./NotificationPopover";
import { GiSpeaker } from "react-icons/gi";

const Header = () => {
  let [activeTab, setActiveTab] = useState();

  let [showPopoverNotification, setShowPopoverNotification] = useState(false);
  let [showPopoverProfile, setShowPopoverProfile] = useState(false);

  let navData = [
    {
      navTitle: "DASHBOARD",
      link: "/",
    },
    {
      navTitle: "ATTENDANCE",
      link: "/attendance",
    },
    {
      navTitle: "LEAVE & HALF DAY",
      link: "/leave",
    },
    {
      navTitle: "SALARY",
      link: "/salary",
    },
    {
      navTitle: "POLICIES",
      link: "/policies",
    },
    {
      navTitle: "DOCUMENTS",
      link: "/documents",
    },
    {
      navTitle: "RESIGNATION",
      link: "/resignation-page",
    },
    {
      navTitle: "PROFILE DETAILS",
      link: "/my-profile-details",
    },
  ];

  let location = window.location;

  console.log(showPopoverProfile);

  let handelNotificationPopover = () => {
    setShowPopoverNotification(!showPopoverNotification);

    console.log(showPopoverNotification);
  };

  return (
    <>
      <div className="h-[70px] custom-px flex items-center justify-between relative">
        <Link to="/">
          <div>
            <img src={Logo} />
          </div>
        </Link>
        <div className=" flex  items-center">
          <div className="flex gap-5 items-center">
            <div
              className={`cursor-pointer  p-2 rounded-full h-[50px] w-[50px] flex justify-center items-center ${
                showPopoverNotification && "activeAnnouncementIcon"
              }`}
              onClick={() => handelNotificationPopover()}
            >
              <img
                src={!showPopoverNotification ? SpeakerDark : SpeakerLite}
                className="text-4xl custom-animate "
              />
            </div>
            <div className="border border-[#333333] px-[40px] py-2 rounded-3xl">
              {" "}
              Mirats ID
            </div>
            <div className="text-[#333333]">
              <p className="text-[20px] font-[400]">
                Good Morning,<span> Sagar</span>{" "}
              </p>
              <p className="text-[14px] ">Recruitment Coordinator</p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setShowPopoverProfile(!showPopoverProfile)}
            >
              <Avatar
                type="img"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                variant="success"
                size="lg"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className=" custom-gradient h-[59px] flex items-center justify-center">
        <div className="text-[#ffff] ">
          <nav className="flex gap-5">
            {navData.map((item) => {
              return (
                <Link to={item.link} onClick={() => setActiveTab(item.link)}>
                  <p
                    className={`text-[#E0E0E0] ${
                      item.link === location.pathname ? "border-b-4" : ""
                    } `}
                  >
                    {item.navTitle}
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="z-50 absolute top-[9%] right-[25%]">
          {showPopoverNotification && <NotificationPopover />}
        </div>
        <div className="z-50 absolute top-[9%] right-[2%]">
          {showPopoverProfile && <MyProfilePopover />}
        </div>
      </div>
    </>
  );
};

export default Header;
