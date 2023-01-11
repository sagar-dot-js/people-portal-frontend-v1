import React from "react";
import Button from "../components/Button";
import financeDetailImg from "../assets/Financial Details.png";

const FinancialDetails = ({ tab, setTab }) => {
  console.log(tab);
  return (
    <div className=" w-full flex border-[1px] border-[#ACACAC] p-[40px] rounded-[16px]">
      <div className="h-full w-[50%]  relative">
        <div>
          <p className="text-[24px] font-[700]">Financial Details</p>
          <p className="text-[400] text[#333333] w-[80%] ">
            Complete this information to setup your financials.
          </p>
          <div className="w-[313px] h-[285px]  absolute top-[200px] left-[100px]">
            <img src={financeDetailImg} />
          </div>
        </div>
      </div>
      <div className="h-full w-[50%] px-[40px] py-[36px] ">
        <div className="h-[610px] w-full rounded-[8px] custom-box-shadow3 p-[24px]  bank-form-container flex flex-col gap-[6px]">
          <div>
            <p>Bank Name </p>
            <input type="text" placeholder="7347983498348" />
          </div>
          <div>
            <p>Branch </p>
            <input type="text" placeholder="Mumbai" />
          </div>
          <div>
            <p>Account Holder Name </p>
            <input type="text" placeholder="Sagar Borude" />
          </div>
          <div>
            <p>Account Number</p>
            <input type="text" placeholder="7347983498348" />
          </div>
          <div>
            <p>IFSC Code</p>
            <input type="text" placeholder="7347983498348" />
          </div>
          <div>
            <p>Swift Code</p>
            <input type="text" placeholder="7347983498348" />
          </div>

          {/*  */}
          <div className=" p-[15px] flex justify-center">
            <div className="flex gap-2">
              <div className="h-2 cursor-pointer w-16 rounded-[100px] bg-[#1765DC]">
                {" "}
              </div>{" "}
              <div
                className="h-2 cursor-pointer w-16 rounded-[100px] bg-[#D9D9D9]"
                onClick={() => setTab(1)}
              >
                {" "}
              </div>{" "}
            </div>
          </div>

          <div className=" w-full">
            <Button
              className="w-full"
              variant="filled"
              onClick={() => setTab(1)}
            >
              Next
            </Button>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default FinancialDetails;
