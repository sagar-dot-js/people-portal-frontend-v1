import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal/Modal";
import { ModalContent } from "../components/Modal/Modal.style";
import Radio, { RadioButton } from "../components/Radio/Radio";
import submitedImage from "../assets/submited.png";
import quitting from "../assets/Quitting-job.png";

const ResignationForm = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log(openModal);
  };
  return (
    <div className="custom-px flex justify-between ">
      <div className="h-[695px] resignation-from my-[53px] w-[50%]">
        <div className="border-b flex justify-center p-[20px]">
          <h1 className="text-[24px] text-[600]">Apply for Resignation</h1>
        </div>
        <div className="px-[40px] py-[30px] flex flex-col  h-[85%] overflow-y-scroll gap-4">
          <div>
            <h2>Resign Date (By Default)</h2>
            <input type="date" />
          </div>
          <div>
            <h2>Serve Notice Period *</h2>
            <div className="mt-[10px] flex gap-10">
              <div className="flex ">
                {" "}
                <Radio></Radio>Yes
              </div>{" "}
              <div className="flex">
                <Radio></Radio>No
              </div>
            </div>
          </div>
          <div>
            <h2>Last working date</h2>
            <input type="date" />
          </div>
          <div>
            <h2>Why are you resigning from this job? *</h2>
            <input type="text" placeholder="Type here" />
          </div>
          <div>
            <h2>
              Do you think management gave you enough opportunities to air your
              views? *
            </h2>
            <input type="text" placeholder="Type here" />
          </div>
          <div>
            <h2>Did you have any goals when you joined the company? *</h2>
            <input type="text" placeholder="Type here" />
          </div>
          <div>
            <h2>
              What would you need to change for you to consider returning to
              this job? *
            </h2>
            <input type="text" placeholder="Type here" />
          </div>
          <div>
            <h2>If you were to change anything here, what would it be? *</h2>
            <input type="text" placeholder="Type here" />
          </div>
          <div>
            <h2>
              Are there any Reasons to Not Give One month Notice period? (answer
              only if you're not serving notice period)
            </h2>
            <input type="text" placeholder="Type here" />
          </div>
          <div className="mt-[30px]">
            <Button
              // onClick={(e) => console.log("its working", e)}
              variant="filled"
              className="w-full"
              onClick={() => openModal()}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className=" w-[50%]  relative">
        <div className=" overflow-hidden absolute bottom-[200px] left-[100px]">
          <img src={quitting} className="h-full w-full" />
        </div>
      </div>

      <div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ModalContent>
            <div className="w-[400px] h-[266px] flex items-center flex-col justify-center text-center gap-3">
              <div className="w-[200px]">
                <img src={submitedImage} className="h-full w-full object-fit" />
              </div>

              <p className="text-[#333333] text-[24px] font-[700]">
                Submited..!
              </p>
              <p className="text-[#666666] text-[16px] font-[400]">
                {" "}
                Submission has been is received.
              </p>
              <p className="text-[#ACACAC] text-[12px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                adipiscing hendrerit adipiscing.
              </p>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default ResignationForm;
