import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox/CheckBox";
import Modal from "../components/Modal/Modal";
import { ModalContent } from "../components/Modal/Modal.style";
import submitedImage from "../assets/submited.png";

const ResonsForLeaving = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSubmited, setShowModalSubmited] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log(openModal);
  };

  const openModalSubmited = () => {
    setShowModalSubmited((prev) => !prev);
    console.log(openModal);
  };

  return (
    <div className="w-[650px] text-[#666666] flex flex-col gap-5  border rounded-[24px] mx-auto mt-10 shadow-md p-5">
      <div className="">
        <p className="text-[20px] text-[#333333] font-[800] mb-4">
          Are you sure you want to resign a company?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, risus,
          bibendum purus nulla. Sit commodo ultrices neque fermentum ac lobortis
          amet imperdiet. Netus praesent imperdiet commodo tellus tortor et.
        </p>
      </div>
      <div>
        <p className="text-[20px] text-[#333333] font-[800]  mb-4">
          Reason for leaving{" "}
          <span className="text-[#666666]"> (required) </span>
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between border-b py-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="flex justify-between border-b py-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="flex justify-between border-b py-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="flex justify-between border-b pb-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="border-b py-4">
            <div className="flex justify-between">
              {" "}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <CheckBox></CheckBox>{" "}
            </div>
            <p className="pt-3">
              Note : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nisl, risus, bibendum purus nulla. Sit commodo ultrices neque
              fermentum ac lobortis amet imperdiet. Netus praesent imperdiet
              commodo tellus tortor et.
            </p>
          </div>
          <div className="flex justify-between border-b py-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="border-b py-4">
            <div className="flex justify-between">
              {" "}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <CheckBox></CheckBox>{" "}
            </div>
            <p className="pt-3">
              Note : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nisl, risus, bibendum purus nulla. Sit commodo ultrices neque
              fermentum ac lobortis amet imperdiet. Netus praesent imperdiet
              commodo tellus tortor et.
            </p>
          </div>
        </div>
      </div>
      <div className=" ml-auto flex items-center gap-5">
        <Button variant="outlined" customWidth="200px">
          Cancel
        </Button>

        <Button variant="filled" onClick={() => openModal()}>
          Continue
        </Button>
      </div>
      <div>
        {/* Confirm pop up */}
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ModalContent>
            <div className="w-[350px] flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                dolor sit amet.
              </p>
              <p className="text-[#333333]">
                Do you really want to apply for resignation ?
              </p>
              <div className=" flex gap-3 ">
                <Button variant="outlined" className="w-[50%]">
                  No
                </Button>{" "}
                <Link to="/resignation/resignation-form" className="w-[50%]">
                  <Button variant="filled" className="w-full">
                    Yes
                  </Button>{" "}
                </Link>
              </div>
            </div>
            <Modal
              showModal={showModalSubmited}
              setShowModal={setShowModalSubmited}
            >
              <ModalContent>
                <div className="w-[350px]">
                  <div className="text-center flex flex-col gap-2 items-center justify-center ">
                    <div className=" ">
                      <img
                        src={submitedImage}
                        className="h-full w-full object-fit"
                      />
                    </div>
                    <h3 className="text-[#333333] text-[24px] font-[700]">
                      Submited..!
                    </h3>
                    <p className="text-[#666666] text-[16px]">
                      {" "}
                      Submission has been is received.
                    </p>
                    <p className="text-[#ACACAC] text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Netus adipiscing hendrerit adipiscing.
                    </p>
                  </div>
                </div>
              </ModalContent>
            </Modal>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default ResonsForLeaving;
