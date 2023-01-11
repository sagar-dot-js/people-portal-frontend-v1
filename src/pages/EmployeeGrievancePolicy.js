import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal/Modal";
import { ModalContent } from "../components/Modal/Modal.style";
import LaptopAgrrementForm from "../custom_components/forms/LaptopAgrrementForm";

const EmployeeGrievancePolicy = () => {
  let [showlaptopForm, setShowLaptopForm] = useState(false);
  const openModalLaptopAgreement = () => {
    setShowLaptopForm((prev) => !prev);
  };
  return (
    <div className="policies">
      <div className="border policy-header  h-[364px]  custom-px flex items-center">
        <div className=" w-[700px] flex flex-col gap-2">
          <p className="text-[#1765DC] text-[32px]">
            Employee Grievance Policy
          </p>
          <p className="text-[#8CB5F3] text-[16px]">
            Mirats Insights Pvt Ltd (Mumbai, India){" "}
          </p>

          <p className="text-[#666666] text-[16px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            feugiat massa porta sed augue. Viverra commodo cras egestas
            pellentesque at rutrum. Faucibus dui lectus bibendum enim. Diam quis
            praesent turpis lorem sit phasellus amet. Tristique felis risus id
            aenean sapien. Vivamus pellentesque vel nisi, aliquam imperdiet
            donec est bibendum sit.{" "}
          </p>

          <Button
            variant="filled"
            className="w-[100px] mt-2"
            onClick={() => openModalLaptopAgreement()}
          >
            Procced
          </Button>
        </div>
      </div>
      <div>
        <div className="custom-px  mt-[51px]  flex flex-col gap-5">
          <h1 className="text-[#1765DC] text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit !
          </h1>
          <p className="">
            The laptop is the property of Macer India Research & Technology
            Services Private Limited (“we” or “Mirats”) and issued to employees
            for the purpose of conducting official business. It is intended only
            for the use of the Mirats employee to whom it is assigned.
          </p>
          <p>
            The laptop must be at the office during regularly scheduled work
            days in order to receive administrative communications, upgrades to
            anti-virus and other software, to take daily attendance and other
            requirements of the records management system, etc. The laptop may
            be taken home after working hours by the employee. However, the
            employee is responsible, at all times, for the care and appropriate
            use of the laptop.
          </p>{" "}
          <p>
            Mirats will have 24/7 access to devices and digital content. Each
            user who is assigned a laptop must have a signed copy of the MIRATS
            Information Security Acceptable Use and Access Control Policy on
            file. Each laptop is equipped with security software. It is
            essential that the employee assigned a laptop notify the Technology
            Department (support@miratsinsights.com) immediately if the laptop is
            lost or stolen. The laptop is configured to be used on the office
            network. The Technology Department will not be able to assist you at
            your home in order to connect the laptop to other internet
            providers.
          </p>
          <p>
            The laptop will need to be returned to the technology department
            from time to time to receive regular maintenance and upgrades. You
            will be notified when this becomes necessary. Division and office
            policies regarding appropriate use, data protection, misuse, health
            and safety must be adhered to by all users of the Mirats Insights
            Pvt Ltd.
          </p>
          <h2>
            As a borrower of an Mirats laptop, I accept the following
            responsibilities:
          </h2>
          <ul className="list-disc leading-10">
            <li>
              I will follow the guidelines listed below for proper care of the
              laptop.{" "}
            </li>
            <li>
              I will use them for professional development purposes. I will not
              install any software on it unless it has been approved by the
              office’s technology coordinator (Requests for software
              modification or installation should be made 7 days in advance of
              when they are needed.)
            </li>
            <li>
              I will not write on or place any labels or stickers on the laptop.
            </li>
            <li>
              I will not disable or uninstall the virus protection program that
              is provided with the machine.
            </li>
            <li>
              I will report any problems/issues I encounter while using the
              laptop to the technology department immediately through the help
              desk.(support@miratsinsights.com)
            </li>
            <li>
              I will ensure any documents I create will be moved from the laptop
              to the network on a monthly basis for backup purposes.
            </li>
            <li>
              I understand that the technology staff will reimage the laptop at
              any point when it becomes unusable or unstable and at the end of
              the year.
            </li>
            <li>
              I understand that reimaging may be a course of action for any
              repairs or modifications on and this will result in the loss of
              all data from the laptop.
            </li>
          </ul>
          <h2>Guidelines for Proper Care of the Laptop:</h2>
          <ol className="list-decimal leading-10">
            <li>The laptop is not to be loaned to anyone.</li>
            <li>
              {" "}
              Other individuals, including children, should not be allowed to
              play on the laptop.
            </li>
            <li>
              Proper care is to be given to the laptop at all times, including
              but not limited to the following:
              <ol className="list-disc leading-10">
                <li>Give care appropriate for any electrical device</li>
                <li>
                  Use a surge protector or unplug the laptop during electrical
                  storms.
                </li>
                <li>Keep food and drink away from the laptop.</li>
                <li>
                  Do not leave the laptop exposed to direct sunlight or extreme
                  cold.
                </li>
                <li>
                  Position the laptop on a safe surface so it does not drop or
                  fall.
                </li>
                <li>
                  Do not attempt to repair a damaged or malfunctioning laptop.
                </li>
                <li>Do not attempt to upgrade the laptop or software.</li>
              </ol>
            </li>
            <li>
              Proper security is to be provided for the laptop at all times,
              including, but not limited to, the following:
              <ol className="list-disc leading-10">
                <li>
                  Secure your laptop in a safe place at the end of the day.{" "}
                </li>
                <li>Do not leave the laptop in an unlocked car</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      <div>
        <Modal showModal={showlaptopForm} setShowModal={setShowLaptopForm}>
          <ModalContent>
            <div className="w-[741px] max-h-[600px] overflow-scroll">
              <LaptopAgrrementForm />
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default EmployeeGrievancePolicy;
