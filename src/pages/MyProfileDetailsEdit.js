import React, { useState } from "react";
import profilePhoto from "../assets/profile-pic.jpg";
import Button from "../components/Button";
import Modal from "../components/Modal/Modal";
import { ModalContent } from "../components/Modal/Modal.style";
import DocumentsAndLegal from "../custom_components/forms/DocumentsAndLegal";
import FinancialDetails from "../custom_components/forms/FinancialDetails";
import IdentityDetails from "../custom_components/forms/IdentityDetails";
import PersonalInformation from "../custom_components/forms/PersonalInformation";
import WorkDetails from "../custom_components/forms/WorkDetails";
import { BsLaptop } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";

let profileData = [
  {
    title: "Personal Information",
    icon: "",
  },
  {
    title: "Financial Details",
    icon: "",
  },
  {
    title: "Identity Details",
    icon: "",
  },
  {
    title: "Work Details",
    icon: "",
  },
  // {
  //   title: "Documents and Legal",
  //   icon: "",
  // },
];

const MyProfileDetailsEdit = () => {
  const [showModalEditProfilePic, setShowModalEditProfilePic] = useState(false);

  const openModalEditProfilePic = () => {
    setShowModalEditProfilePic((prev) => !prev);
    // console.log(openModal);
  };

  let [activeProfileTab, setActiveProfileTab] = useState(
    "Personal Information"
  );
  console.log(activeProfileTab);

  let getCorrectTab = (activeProfileTab) => {
    switch (activeProfileTab) {
      case "Personal Information":
        return <PersonalInformation />;

      case "Financial Details":
        return <FinancialDetails />;

      case "Identity Details":
        return <IdentityDetails />;

      case "Work Details":
        return <WorkDetails />;

      case "Documents and Legal":
        return <DocumentsAndLegal />;
    }
  };

  return (
    <div className=" custom-px custom-py  w-full flex justify-between  ">
      <div>
        <Modal
          showModal={showModalEditProfilePic}
          setShowModal={setShowModalEditProfilePic}
        >
          <ModalContent>
            <div className="w-[400px] flex flex-col items-center ">
              <p className="text-[#333333] text-[20px] font-[700]">
                Set Your Profile Picture
              </p>
              <div className="w-full mt-[16px] box-shadow2 rounded-[16px] p-[20px]">
                <p className="text-[16px]"> File Uploader</p>
                <div className="mt-[20px] w-full border-2 border-dashed rounded-[8px] h-[138px] flex items-center justify-center gap-8 text-[#666666] ">
                  <div className=" hover:text-[#1765DC] cursor-pointer">
                    <input type="file" id="upload" hidden />
                    <label
                      className="flex flex-col items-center gap-2 cursor-pointer"
                      for="upload"
                    >
                      <BsLaptop className="text-2xl" />
                      Browse
                    </label>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:text-[#1765DC] cursor-pointer">
                    <BiLink className="text-2xl" />
                    <p>Link </p>{" "}
                  </div>
                </div>
              </div>
              <Button variant="filled" className="w-full mt-[16px]">
                Save
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </div>
      <div className="w-[35%] ">
        <div className="my-profile-card fixed">
          <div className=" flex items-center gap-5 px-3 my-4 h-[25%]  ">
            <div className="h-[80px] w-[80px] rounded-full border relative">
              <img
                src={profilePhoto}
                className="h-full w-full object-cover rounded-full "
              />{" "}
              <div
                onClick={() => openModalEditProfilePic()}
                className="bg-[#1765DC] h-[20px] w-[20px] flex items-center justify-center rounded-full absolute bottom-0 right-0 cursor-pointer "
              >
                <MdModeEdit className="text-[#fff] text-[15px]" />
              </div>
            </div>
            <div>
              <p className="text-[24px] text-[#333333] font-[700]">
                {" "}
                Sagar Borude
              </p>
              <p className="text-[#666666] text-[14px]">
                sagar.html5@gmail.com
              </p>
            </div>
          </div>
          <div className=" h-[75%] w-full">
            {profileData.map((item, ind) => {
              return (
                <div
                  className={`h-[20%] w-full  flex items-center gap-3 px-8  transition-all  cursor-pointer  ${
                    activeProfileTab === item.title && "active-profile-tab"
                  } `}
                  key={ind}
                  onClick={() => {
                    setActiveProfileTab(item.title);
                  }}
                >
                  <div className="h-[40px] w-[40px] rounded-full bg-[#D9D9D9]"></div>{" "}
                  <p className="text-[16px] transition-all hover:scale-105">
                    {" "}
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[65%] mb-[100px]">
        {/* <PersonalInformation /> */}
        {/* <FinancialDetails /> */}
        {/* <IdentityDetails /> */}
        {/* <WorkDetails /> */}
        {/* <DocumentsAndLegal /> */}
        {getCorrectTab(activeProfileTab)}
      </div>
    </div>
  );
};

export default MyProfileDetailsEdit;
