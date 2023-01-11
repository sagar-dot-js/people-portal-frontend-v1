import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton/LinkButton";

const SalarySlipCard = ({ data }) => {
  return (
    <div className="invoice-card  p-5  flex flex-col gap-8  hover:border border hover:border-blue-400 cursor-pointer">
      <div className="flex justify-between items-center border-b  border-b-black pb-3">
        <p className="text-[20px]"> {data.title}</p>
      </div>

      <div className="flex ">
        <div className="w-[50%] border-r border-r-black">
          <p className="text-[12px]">Total Amount</p>
          <p className="text-[#1765DC]"> ${data.totalAmt}</p>
        </div>
        <div className="w-[50%] pl-5">
          <p className="text-[12px]">Deduction</p>
          <p className="text-[#1765DC] text-[14]"> ${data.Deduction}</p>
        </div>
      </div>
      <div className="flex items-center  gap-6">
        <Button
          className="sagar"
          onClick={(e) => console.log("its working", e)}
          variant="filled"
        >
          View
        </Button>
        <LinkButton
          className="linkBtn"
          href="https://scalablecss.com/styled-components-global-styles/"
        >
          <AiOutlineDownload />
        </LinkButton>
      </div>
    </div>
  );
};

export default SalarySlipCard;
