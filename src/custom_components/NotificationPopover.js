import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Accordion from "../components/Accordion/Accordion";

const NotificationPopover = () => {
  let [tab, setTab] = useState("All");

  let tabData = [
    {
      title: "All",
    },
    {
      title: "Unread",
    },
  ];

  let getCorrectTab = (tab) => {
    switch (tab) {
      case "All":
        return <AllAnnousments />;
      case "Unread":
        return <ReadAnnouncements />;
    }
  };

  return (
    <div className="h-[500px] w-[380px] rounded-[24px] glass-bg  flex flex-col gap-4 shadow-lg ">
      <div className="flex items-center justify-between p-[16px]">
        <div>
          <p className="text-[#333333]">Announcement</p>
          <p className="text-[12px]">
            You have <span className="text-[#1765DC]">1 Announcement </span>{" "}
            today.
          </p>
        </div>
        <div>
          <BiSearch className="text-2xl" />{" "}
        </div>
      </div>
      <div className="flex gap-2 text-[#666666] px-[16px]">
        {tabData.map((item) => {
          return (
            <div
              className={`${
                tab === item.title && "activeAnnouncementTabStyles"
              } px-4 py-1 rounded-[8px] cursor-pointer`}
              onClick={() => setTab(item.title)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div>
        <p className="text-[#333333] text-[16px] font-[600] px-[16px]">Today</p>
      </div>
      <div className=" h-full overflow-y-scroll  py-5">
        {getCorrectTab(tab)}
      </div>
    </div>
  );
};

export default NotificationPopover;

const AllAnnousments = () => {
  return (
    <div>
      <div className="flex items-center gap-2 px-1 ">
        <div>
          <BsDot className="text-3xl" />
        </div>
        <div className="border-[#1765DC] border-2 h-[40px] w-[40px] rounded-full">
          {" "}
        </div>
        <div className="w-[300px] text-[#333333]">
          <p className="text-[14px] font-[600]">
            Lorem ipsum dolor sit amet...
            <span className="text-[10px] ml-5"> 20-12-2022</span>
          </p>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur ascas...
          </p>
        </div>
        <div>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

const ReadAnnouncements = () => {
  return (
    <div className="flex flex-col gap-5">
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Title>Title one</Accordion.Title>
            <Accordion.Icon>
              <IoIosArrowDown />
            </Accordion.Icon>
          </Accordion.Header>
          <Accordion.Body>
            <Accordion.Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages,
            </Accordion.Content>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Title>Title one</Accordion.Title>
            <Accordion.Icon>
              <IoIosArrowDown />
            </Accordion.Icon>
          </Accordion.Header>
          <Accordion.Body>
            <Accordion.Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages,
            </Accordion.Content>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
