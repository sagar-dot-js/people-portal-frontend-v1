import React from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyProfileDetails = () => {
  return (
    <div className="custom-px  flex flex-col gap-5 mb-[100px]">
      <div className="custom-py">
        <p className=" text-[32px] text-[#1765DC]">My Profile Details</p>
        <p className="text-[#8CB5F3]">
          Welcome to <span className="text-[#1765DC]">Mirats </span> Employee’s
          Dashboard
        </p>
      </div>

      {/* Card */}
      <div className="flex flex-col gap-10">
        <div className="  ">
          <div className="flex items-center justify-between pb-5">
            {" "}
            <p className="text-[24px] text-[#333333] font-[700]">
              {" "}
              Personal Information
            </p>{" "}
            <Link to="my-profile-details-edit">
              <div className="bg-[#1765DC] text-[16px] flex gap-2 items-center px-3 py-1 text-[#ffff] rounded-[8px]">
                Edit <FaPen />
              </div>
            </Link>
          </div>

          <div className="custom-box-shadow1 h-[246px]  rounded-[24px] flex  gap-16 items-start px-10 py-5 ">
            <div className="personal-info  leading-10">
              <p>
                Full Name : <span> Avinash M. Pawar</span>
              </p>
              <p>
                {" "}
                Alternative Email Id : <span>sagar.html5@gmail.com </span>
              </p>
              <p>
                {" "}
                Gender : <span> Male </span>
              </p>
              <p>
                Pincode : <span>000001 </span>
              </p>
              <p>
                {" "}
                Country : <span>India </span>
              </p>
            </div>

            <div className="personal-info  leading-10">
              <p>
                Date of Birth : <span> 01-May-1995</span>
              </p>
              <p>
                {" "}
                Contact No : <span>9478738934</span>
              </p>
              <p>
                {" "}
                Blood Group : <span> A+ </span>
              </p>
              <p>
                City : <span>Mumbai </span>
              </p>
            </div>
            <div className="personal-info  leading-10">
              <p>
                Email Id : <span> hkdjvdvjbfvbkjvfjk@gmail.com</span>
              </p>
              <p>
                {" "}
                Alternative Contact No : <span>9478738934</span>
              </p>
              <p>
                {" "}
                Address : <span> xyzsdbc kjsdvnk jssdj kvshk jskjs. </span>
              </p>
              <p>
                State : <span> Maharashtra </span>
              </p>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className=" ">
          <div className="flex items-center justify-between pb-5">
            <p className="text-[24px] text-[#333333] font-[700]">
              {" "}
              Financial Details
            </p>{" "}
            <div className="bg-[#1765DC] text-[16px] flex gap-2 items-center px-3 py-1 text-[#ffff] rounded-[8px]">
              Edit <FaPen />
            </div>
          </div>
          <div className="custom-box-shadow1 h-[530px] rounded-[24px] flex flex-col gap-5  items-start px-10  py-5 ">
            {/* First row */}
            <div className="w-full">
              <div className="border-b w-full pb-2">
                {" "}
                <p className="text-[#1765DC] text-[18] font-[700]">
                  Primary Account Details
                </p>
              </div>
              <div className=" w-full  flex gap-16 mt-2">
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                  <p>
                    {" "}
                    Account Number : <span>39875349753938953 </span>{" "}
                  </p>
                </div>
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                  <p>
                    {" "}
                    Account Number : <span>39875349753938953 </span>{" "}
                  </p>
                </div>
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                  <p>
                    {" "}
                    Account Number : <span>39875349753938953 </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd row */}
            <div className="w-full">
              <div className="border-b w-full pb-2 ">
                {" "}
                <p className="text-[#1765DC] text-[18] font-[700]">
                  Secondary Account Details
                </p>
              </div>
              <div className=" w-full  flex gap-16 mt-2">
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                  <p>
                    {" "}
                    Account Number : <span>39875349753938953 </span>{" "}
                  </p>
                </div>
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                  <p>
                    {" "}
                    Account Number : <span>39875349753938953 </span>{" "}
                  </p>
                </div>
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                  <p>
                    {" "}
                    Account Number : <span>39875349753938953 </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* 3rd row */}
            <div className="w-full">
              <div className="border-b w-full pb-2 ">
                {" "}
                <p className="text-[#1765DC] text-[18] font-[700]">
                  UPI ID Primary Account Details
                </p>
              </div>
              <div className=" w-full  flex gap-16 mt-2">
                <div className="personal-info  leading-10">
                  <p>
                    UPI ID Account Name : <span> Avinash Manoj Pawar</span>{" "}
                  </p>
                </div>
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                </div>
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                </div>
              </div>
            </div>
            {/*  4th row*/}
            <div className="w-full">
              <div className="border-b w-full pb-2 ">
                {" "}
                <p className="text-[#1765DC] text-[18] font-[700]">
                  UPI ID Secondary Account Details
                </p>
              </div>
              <div className=" w-full  flex gap-16 mt-2">
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                </div>
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                </div>
                <div className="personal-info  leading-10">
                  <p>
                    Bank Name : <span> State Bank of India</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
        {/* card 3 */}
        <div className="  ">
          <div className="flex items-center justify-between pb-5">
            {" "}
            <p className="text-[24px] text-[#333333] font-[700]">
              {" "}
              Work Details
            </p>{" "}
            <div className="bg-[#1765DC] text-[16px] flex gap-2 items-center px-3 py-1 text-[#ffff] rounded-[8px]">
              Edit <FaPen />
            </div>
          </div>

          <div className="custom-box-shadow1 h-[246px]  rounded-[24px] flex  gap-16 items-start px-10 py-5 ">
            <div className="personal-info  leading-10">
              <p>
                Job Role : <span> Ui/UX Design</span>
              </p>
              <p>
                {" "}
                Department : <span>Design </span>
              </p>
              <p>
                {" "}
                Team Name : <span> User Interface Design </span>
              </p>
              <p>
                Team Manager Name : <span>Prashant </span>
              </p>
              <p>
                {" "}
                Team Manager Email : <span>India </span>
              </p>
            </div>

            <div className="personal-info  leading-10">
              <p>
                Grade : <span> A</span>
              </p>
              <p>
                {" "}
                Shift Time : <span>9478738934</span>
              </p>
              <p>
                {" "}
                Team Leader Position : <span> Project Manager</span>
              </p>
              <p>
                Team Manager Position : <span> C.E.O </span>
              </p>
            </div>
            <div className="personal-info  leading-10">
              <p>
                Date of Joining :<span> 01-Sept-2022 </span>
              </p>
              <p>
                {" "}
                Work Location : <span>Saki Naka, Mumbai</span>
              </p>
              <p>
                {" "}
                Team Leader Email : <span> sagar@gmail.com </span>
              </p>
              <p>
                Team Manager Contact : <span> Maharashtra </span>
              </p>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="  ">
          <div className="flex items-center justify-between pb-5">
            {" "}
            <p className="text-[24px] text-[#333333] font-[700]">
              {" "}
              Documents & Legal
            </p>{" "}
            <div className="bg-[#1765DC] text-[16px] flex gap-2 items-center px-3 py-1 text-[#ffff] rounded-[8px]">
              Edit <FaPen />
            </div>
          </div>

          <div className="custom-box-shadow1 h-[246px]  rounded-[24px] flex  gap-16 items-start px-10 py-5 ">
            <div className="personal-info  leading-10">
              <p>
                Esic Pehchaan Card : <span> 893457983hXXX</span>
              </p>
              <p>
                {" "}
                Offer Letter Submitted Date : <span>09-Sept-2022</span>
              </p>
              <p>
                {" "}
                Form-2 : <span> Submitted </span>
              </p>
              <p>
                Adharcard Submitted Date : <span>09-Sept-2022 </span>
              </p>
            </div>

            <div className="personal-info  leading-10">
              <p>
                PF Number : <span> 4523454321</span>
              </p>
              <p>
                {" "}
                Form-11 : <span>Submitted</span>
              </p>
              <p>
                {" "}
                Form-2 Submitted : <span> 09-Sept-2022 </span>
              </p>
              <p>
                Pancard : <span>Uploaded </span>
              </p>
            </div>
            <div className="personal-info  leading-10">
              <p>
                Offer Letter : <span> Submitted</span>
              </p>
              <p>
                {" "}
                Form-11 Submitted : <span>09-Sept-2022</span>
              </p>
              <p>
                {" "}
                Adharcard : <span>Uploaded </span>
              </p>
              <p>
                Pancard Submitted Date : <span> 09-Sept-2022 </span>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default MyProfileDetails;
