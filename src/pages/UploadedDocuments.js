import React from "react";
import { TbLogout } from "react-icons/tb";
import ButtonWithIcon from "../components/ButtonWithIcon/ButtonWithIcon";
import { FiDownload } from "react-icons/fi";
import LinkButton from "../components/LinkButton/LinkButton";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "../components/Button";

let documentData = [
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
];

const UploadedDocuments = () => {
  return (
    <div className=" custom-px  ">
      <div className="flex justify-between  custom-py ">
        <div>
          <p className=" text-[32px] text-[#1765DC]">Documents and Legal</p>
          <p className="text-[#8CB5F3]">
            Welcome to <span className="text-[#1765DC]">Mirats </span>{" "}
            Employee’s Dashboard
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-5 pb-[100px]">
        {documentData.map((item, ind) => {
          return (
            <div className="custom-box-shadow2 w-[295px] h-[176px] p-5 rounded-[16px] flex flex-col gap-3">
              <div className="flex justify-between">
                {" "}
                <p className="text-[18px] font-[700]">{item.title}</p>{" "}
                <LinkButton href="https://scalablecss.com/styled-components-global-styles/">
                  <AiOutlineDownload />
                </LinkButton>
              </div>
              <div>
                <p className="text-[14px]"> Sign Date</p>
                <p className="texs-[#1765DC] text-[16px]"> 11 Sept 2022</p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={(e) => console.log("its working", e)}
                  variant="filled"
                  className="w-[50%]"
                >
                  View
                </Button>
                <Button
                  onClick={(e) => console.log("its working", e)}
                  variant="outlined"
                  className="w-[50%]"
                >
                  Upload
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadedDocuments;
