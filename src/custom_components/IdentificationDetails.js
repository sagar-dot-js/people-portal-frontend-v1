import React, { useState } from "react";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox/CheckBox";
import IdentifictionImage from "../assets/Identity Details.png";
const IdentificationDetails = ({ tab, setTab }) => {
  let [expand, setExpan] = useState({
    accordion1: true,
    accordion2: false,
    accordion3: false,
    accordion4: false,
    accordion5: false,
  });

  let fileInput;
  return (
    <div className=" w-full flex border-[1px] border-[#ACACAC] p-[40px] rounded-[16px]">
      <div className="h-full w-[50%]  relative">
        <div>
          <p className="text-[24px] font-[700]">Identification Details</p>
          <p className="text-[400] w-[80%] text[#333333]">
            Share us your identification details in order to complete your
            porfile’s this section.
          </p>
          <div className="w-[313px] h-[285px]  absolute top-[200px] left-[100px]">
            <img src={IdentifictionImage} />
          </div>
        </div>
      </div>
      <div className="h-full  w-[50%] px-[40px] py-[36px] ">
        <div className="h-[610px]  w-full rounded-[8px] custom-box-shadow3 p-[24px] flex flex-col gap-[10px] bank-form-container">
          <p>Which documents do you have?</p>

          {/* Accordion 1 */}
          <div
            className={`${
              !expand.accordion1 ? "h-[30px]" : "h-[290px]"
            }  transition-all duration-200  overflow-hidden`}
          >
            <div>
              <div
                className="flex gap-5 items-center  "
                onClick={() => {
                  setExpan({
                    ...expand,
                    accordion1: !expand.accordion1,
                    accordion2: false,
                    accordion3: false,
                    accordion4: false,
                    accordion5: false,
                  });
                }}
              >
                <CheckBox /> <p>Aadhaar Card</p>
              </div>
            </div>
            <div className="mt-3">
              <p>Aadhaar card Name </p>
              <input type="text" placeholder="Avinash Pawar" />
            </div>
            <div className="mt-3">
              <p>Aadhaar card Number </p>
              <input type="text" placeholder="1234 5436 7654" />
            </div>
            <div className="mt-3">
              <p className="mb-[8px]">File Upload </p>
              <div className="upload_container ">
                <div className="inputfile_box ">
                  <input
                    type="file"
                    id="file"
                    className="inputfile"
                    //   onChange={() => handleFileChange()}
                    // onChange={(e) => console.log(e.target.files[0].name)}
                  />
                  <label for="file">
                    <span id="file-name" className="file_box">
                      {fileInput}
                    </span>
                    <span className="file_button">Browse</span>
                  </label>
                </div>
                <Button variant="filled">Upload</Button>
              </div>
            </div>
          </div>
          {/* Acordion 2 */}
          <div
            className={`${
              !expand.accordion2 ? "h-[30px]" : "h-[285px]"
            }  transition-all duration-200  overflow-hidden`}
          >
            <div>
              <div
                className="flex gap-5 items-center  "
                onClick={() => {
                  setExpan({
                    ...expand,
                    accordion1: false,
                    accordion2: !expand.accordion2,
                    accordion3: false,
                    accordion4: false,
                    accordion5: false,
                  });
                }}
              >
                <CheckBox /> <p>Pan Card</p>
              </div>
            </div>
            <div className="mt-3">
              <p>Pan card Name </p>
              <input type="text" placeholder="Avinash Pawar" />
            </div>
            <div className="mt-3">
              <p>Pan card Number </p>
              <input type="text" placeholder="1234 5436 7654" />
            </div>
            <div className="mt-3">
              <p className="mb-[8px]">File Upload </p>
              <div className="upload_container ">
                <div className="inputfile_box ">
                  <input
                    type="file"
                    id="file"
                    className="inputfile"
                    //   onChange={() => handleFileChange()}
                    // onChange={(e) => console.log(e.target.files[0].name)}
                  />
                  <label for="file">
                    <span id="file-name" className="file_box">
                      {fileInput}
                    </span>
                    <span className="file_button">Browse</span>
                  </label>
                </div>
                <Button variant="filled">Upload</Button>
              </div>
            </div>
          </div>
          {/* Acordion 3 */}
          <div
            className={`${
              !expand.accordion3 ? "h-[30px]" : "h-[285px]"
            }  transition-all duration-200  overflow-hidden`}
          >
            <div>
              <div
                className="flex gap-5 items-center  "
                onClick={() => {
                  setExpan({
                    ...expand,
                    accordion1: false,
                    accordion2: false,
                    accordion3: !expand.accordion3,
                    accordion4: false,
                    accordion5: false,
                  });
                }}
              >
                <CheckBox /> <p>Passport</p>
              </div>
            </div>
            <div className="mt-3">
              <p>Passport Name </p>
              <input type="text" placeholder="Avinash Pawar" />
            </div>
            <div>
              <p>Passport Number </p>
              <input type="text" placeholder="1234 5436 7654" />
            </div>
            <div>
              <p className="mb-[8px]">File Upload </p>
              <div className="upload_container ">
                <div className="inputfile_box ">
                  <input
                    type="file"
                    id="file"
                    className="inputfile"
                    //   onChange={() => handleFileChange()}
                    // onChange={(e) => console.log(e.target.files[0].name)}
                  />
                  <label for="file">
                    <span id="file-name" className="file_box">
                      {fileInput}
                    </span>
                    <span className="file_button">Browse</span>
                  </label>
                </div>
                <Button variant="filled">Upload</Button>
              </div>
            </div>
          </div>
          {/* Acordion 4 */}
          <div
            className={`${
              !expand.accordion4 ? "h-[30px]" : "h-[285px]"
            }  transition-all duration-200  overflow-hidden`}
          >
            <div>
              <div
                className="flex gap-5 items-center  "
                onClick={() => {
                  setExpan({
                    ...expand,
                    accordion1: false,
                    accordion2: false,
                    accordion3: false,
                    accordion4: !expand.accordion4,
                    accordion5: false,
                  });
                }}
              >
                <CheckBox /> <p>Driving Lisenced</p>
              </div>
            </div>
            <div className="mt-3">
              <p>Lisenced Name </p>
              <input type="text" placeholder="Avinash Pawar" />
            </div>
            <div>
              <p>Lisenced Number </p>
              <input type="text" placeholder="1234 5436 7654" />
            </div>
            <div>
              <p className="mb-[8px]">File Upload </p>
              <div className="upload_container ">
                <div className="inputfile_box ">
                  <input
                    type="file"
                    id="file"
                    className="inputfile"
                    //   onChange={() => handleFileChange()}
                    // onChange={(e) => console.log(e.target.files[0].name)}
                  />
                  <label for="file">
                    <span id="file-name" className="file_box">
                      {fileInput}
                    </span>
                    <span className="file_button">Browse</span>
                  </label>
                </div>
                <Button variant="filled">Upload</Button>
              </div>
            </div>
          </div>
          {/* Acordion 5 */}
          <div
            className={`${
              !expand.accordion5 ? "h-[30px]" : "h-[285px]"
            }  transition-all duration-200  overflow-hidden`}
          >
            <div>
              <div
                className="flex gap-5 items-center  "
                onClick={() => {
                  setExpan({
                    ...expand,
                    accordion1: false,
                    accordion2: false,
                    accordion3: false,
                    accordion4: false,
                    accordion5: !expand.accordion5,
                  });
                }}
              >
                <CheckBox /> <p>Others</p>
              </div>
            </div>
            <div className="mt-3">
              <p> Name </p>
              <input type="text" placeholder="Avinash Pawar" />
            </div>
            <div>
              <p> Number </p>
              <input type="text" placeholder="1234 5436 7654" />
            </div>
            <div>
              <p className="mb-[8px]">File Upload </p>
              <div className="upload_container ">
                <div className="inputfile_box ">
                  <input
                    type="file"
                    id="file"
                    className="inputfile"
                    //   onChange={() => handleFileChange()}
                    // onChange={(e) => console.log(e.target.files[0].name)}
                  />
                  <label for="file">
                    <span id="file-name" className="file_box">
                      {fileInput}
                    </span>
                    <span className="file_button">Browse</span>
                  </label>
                </div>
                <Button variant="filled">Upload</Button>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" p-[8px] flex justify-center">
            <div className="flex gap-2">
              <div
                className="h-2 cursor-pointer w-16 rounded-[100px] bg-[#D9D9D9]"
                onClick={() => setTab(0)}
              >
                {" "}
              </div>
              <div className="h-2 cursor-pointer w-16 rounded-[100px] bg-[#1765DC]">
                {" "}
              </div>{" "}
            </div>
          </div>

          <div className=" w-full">
            <Button className="w-full" variant="filled">
              Next
            </Button>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default IdentificationDetails;
