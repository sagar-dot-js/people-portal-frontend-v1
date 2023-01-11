import { data } from "autoprefixer";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton/LinkButton";

const Documents = () => {
  let documentsData = [
    {
      title: "MI -eID Card",
      SignDate: "11 Sept 2022",
      link: "https://scalablecss.com/styled-components-global-styles/",
    },
    {
      title: "ESIC ePehchan Card",
      SignDate: "11 Sept 2022",
      link: "https://scalablecss.com/styled-components-global-styles/",
    },
    {
      title: "Adhar Card",
      SignDate: "11 Sept 2022",
      link: "https://scalablecss.com/styled-components-global-styles/",
    },
    {
      title: "Pan Card",
      SignDate: "11 Sept 2022",
      link: "https://scalablecss.com/styled-components-global-styles/",
    },
    {
      title: "Offer Letter",
      SignDate: "11 Sept 2022",
      link: "https://scalablecss.com/styled-components-global-styles/",
    },
    {
      title: "Non-disclosure Agreement",
      SignDate: "11 Sept 2022",
      link: "https://scalablecss.com/styled-components-global-styles/",
    },
    {
      title: "Form - 2",
      SignDate: "11 Sept 2022",
      link: "https://scalablecss.com/styled-components-global-styles/",
    },
    {
      title: "Form - 11",
      SignDate: "11 Sept 2022",
      link: "https://scalablecss.com/styled-components-global-styles/",
    },
  ];

  return (
    <div className="custom-px  mb-[100px]">
      <div className=" custom-py">
        <p className=" text-[32px] text-[#1765DC]">Documents and Legal</p>
        <p className="text-[#8CB5F3]">
          Welcome to <span className="text-[#1765DC]">Mirats </span> Employee’s
          Dashboard
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {documentsData.map((item) => {
          return (
            <div className="w-[292px] h-[176px] custom-box-shadow2 rounded-[16px] p-[16px] flex flex-col gap-3">
              <div className="flex justify-between items-center  ">
                <p className="text-[18px] font-[700]">{item.title}</p>
                <div>
                  <LinkButton href="https://scalablecss.com/styled-components-global-styles/">
                    <AiOutlineDownload />
                  </LinkButton>
                </div>
              </div>
              <div>
                <p className="text-[14px]">Sign Date</p>
                <p className="text-[#1765DC] text-[16px]">11 Sept 2022</p>
              </div>
              <div className=" flex gap-3">
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

export default Documents;
