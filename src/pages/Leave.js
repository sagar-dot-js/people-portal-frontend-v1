import { useState } from "react";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import Dropdown from "../components/Dropdown/Dropdown";
import Link from "../components/Link/Link";
import ButtonWithIcon from "../components/ButtonWithIcon/ButtonWithIcon";
import HolidayCalendar from "../custom_components/HolidayCalendar";
import Modal from "../components/Modal/Modal";
import { ModalContent } from "../components/Modal/Modal.style";
import { FiEdit } from "react-icons/fi";

import Table, {
  TableActionPopUp,
  TableBody,
  TableHead,
  TableRow,
  TableWithPagination,
  Td,
  Th,
} from "../components/Table/Table";
import Button from "../components/Button";

import TablePagination from "../components/Table/TablePagination";
import { TbLogout } from "react-icons/tb";
import Chip from "../components/Chips/Chip";
import { Chips } from "../components/Chips/Chip.style";
import UpcommingHolidays from "../custom_components/UpcommingHolidays";
import { Calendar } from "react-calendar";
import months from "../json-data/months.json";
import year from "../json-data/years.json";

const Leave = () => {
  const statusColors = {
    unseen: "error",
    seen: "primary",
    approved: "success",
  };

  const data = [
    {
      date: "25 - 09 - 2022",
      leavetype: "Monday",
      status: "Approved",
      remarks:
        "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Wedesday",
      status: "Approved",
      remarks:
        "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Friday",
      status: "Approved",
      remarks:
        "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Sunday",
      status: "Approved",
      remarks:
        "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Monday",
      status: "Approved",
      remarks:
        "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Tuesday",
      status: "Approved",
      remarks:
        "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu",
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [showModalRequestLeave, setShowModalRequestLeave] = useState(false);
  const [showModalDeleteRequest, setShowModalDeleteRequest] = useState(false);

  const openModalRequestForLeave = () => {
    setShowModalRequestLeave((prev) => !prev);
  };
  const openModalDelete = () => {
    setShowModalDeleteRequest((prev) => !prev);

    console.log(showModalDeleteRequest);
  };

  const surveyType = ["one", "two", "three"];

  const newmonth = months.map((item) => {
    return { label: item.name, value: item.abbreviation };
  });

  const [fields, setFields] = useState({});

  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    fields[name] = value;
    setFields({ ...fields, [name]: value });
  }

  let cardData = [
    {
      title: "TOTAL LEAVE",
      subTitle: "24 ",
    },
    {
      title: "REMAINING LEAVE",
      subTitle: "00 ",
    },
    {
      title: "CASUAL LEAVE",
      subTitle: "11",
    },
    {
      title: "JSick Leave",
      subTitle: "15",
    },
    {
      title: "Unpaid Leave",
      subTitle: "68",
    },
  ];

  let leavetype = [
    {
      label: "Paid Leave",
      value: "paid leave",
    },
    {
      label: "Seak Leave",
      value: "Seak leave",
    },
  ];

  let status = [
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Approved",
      value: "Approved",
    },
  ];
  return (
    <div className=" custom-px ">
      <div className="flex justify-between  custom-py ">
        <div>
          <p className=" text-[32px] text-[#1765DC]">Leave</p>
          <p className="text-[#8CB5F3]">
            Welcome to <span className="text-[#1765DC]">Mirats </span>{" "}
            Employee’s Dashboard
          </p>
        </div>
        <ButtonWithIcon
          onClick={openModalRequestForLeave}
          variant="filledIcon"
          className="ml-auto"
        >
          {<TbLogout size={25} />}Request for Leave
        </ButtonWithIcon>

        <div>
          {" "}
          <Modal
            showModal={showModalDeleteRequest}
            setShowModal={setShowModalDeleteRequest}
          >
            <ModalContent>
              <div className="text-[#333333] flex flex-col gap-4 ">
                <p className="text-[24px]">Delete Request</p>
                <p>Do you really want to send delete request ?</p>
                <div className="flex gap-5">
                  <Button
                    onClick={(e) => console.log("its working", e)}
                    variant="outlined"
                    className="w-[50%]"
                  >
                    No
                  </Button>
                  <Button
                    onClick={(e) => console.log("its working", e)}
                    variant="filled"
                    className="w-[50%]"
                  >
                    Yes
                  </Button>
                </div>
              </div>
            </ModalContent>
          </Modal>
        </div>
        <Modal
          showModal={showModalRequestLeave}
          setShowModal={setShowModalRequestLeave}
        >
          <ModalContent>
            <div className="applyLeaveContainer">
              <h2 className=" text-[24px] text-[#333] text-center pb-2 border-b-2 border-grey-600">
                Apply for Leave
              </h2>
              <form>
                <section className="my-4">
                  <label for="leaveType">
                    Leave Type <span>*</span>
                  </label>
                  <select
                    name="leaveType"
                    onChange={handleChange}
                    value={fields["leaveType"]}
                  >
                    <option value="sickLeave">Sick Leave</option>
                    <option value="casualLeave">Casual Leave</option>
                    <option value="halfDay">Half Day</option>
                  </select>
                </section>
                <section className="my-4">
                  <label for="fromDate">
                    From Date <span>*</span>
                  </label>
                  <input
                    type="date"
                    onChange={handleChange}
                    value={fields["fromDate"]}
                  />
                </section>
                {fields["leaveType"] === "halfDay" ? (
                  <>
                    <section className="my-4">
                      <label for="checkIn">Check In</label>
                      <input
                        type="time"
                        onChange={handleChange}
                        value={fields["checkIn"]}
                      />
                    </section>
                    <section className="my-4">
                      <label for="checkOut">Check Out</label>
                      <input
                        type="time"
                        onChange={handleChange}
                        value={fields["checkOut"]}
                      />
                    </section>
                  </>
                ) : (
                  <section className="my-4">
                    <label for="toDate">To Date</label>
                    <input
                      type="date"
                      onChange={handleChange}
                      value={fields["toDate"]}
                    />
                  </section>
                )}

                <section className="my-4">
                  <label for="remarks">
                    Remarks <span>*</span>
                  </label>
                  <textarea
                    cols="10"
                    rows="3"
                    placeholder="Type Here"
                    onChange={handleChange}
                    value={fields["remarks"]}
                  ></textarea>
                </section>
                <Button style={{ width: "100%" }} variant="filled">
                  Send Request
                </Button>
              </form>
            </div>
          </ModalContent>
        </Modal>
      </div>
      <div className=" ">
        <div className="flex  justify-between  2xl:w-[70%]">
          {cardData.map((item) => {
            return (
              <DisplayCard
                customWidth="200px"
                cardHeader={item.title}
                cardBody={item.subTitle}
              />
            );
          })}
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between w-full my-14">
        <div className=" w-[80%] 2xl:w-[50%] flex justify-between items-center ">
          <Dropdown dropdownText="Month" options={newmonth} />
          <Dropdown dropdownText="Year" options={year} />
          <Dropdown dropdownText="Leave type" options={leavetype} />
          <Dropdown dropdownText="Status" options={status} />
          <button className="border-b-[2px] border-[#1765DC] text-[#1765DC] font-[600]">
            Clear Filters
          </button>
        </div>
      </div>
      {/*  */}
      <div className="">
        <TableActionPopUp selectedRows={selectedRows}>
          <button
            onClick={() => openModalDelete()}
            className=" border-2 rounded-lg px-[10px] py-[2px]"
          >
            Delete Request for Attendance
          </button>
        </TableActionPopUp>
        <TableWithPagination>
          <Table>
            <TableHead>
              <TableRow>
                <Th>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows(data);
                      } else setSelectedRows([]);
                    }}
                  />
                </Th>
                <Th>Date</Th>
                <Th>Leave Type</Th>
                <Th>Remarks</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ?.slice(
                  pageNumber * rowsPerPage - rowsPerPage,
                  pageNumber * rowsPerPage
                )
                .map((d, i) => {
                  return (
                    <TableRow key={i}>
                      <Th>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRows(data);
                            } else setSelectedRows([]);
                          }}
                        />
                      </Th>
                      <Td>{d.date}</Td>
                      <Td>{d.leavetype}</Td>
                      <Td>
                        <div className="w-[600px]">
                          <p className="truncate ..."> {d.remarks}</p>{" "}
                        </div>
                      </Td>
                      <Td>
                        {" "}
                        <Chip
                          variant="filled"
                          color={statusColors[d.status.toLowerCase()]}
                        >
                          {d.status}
                        </Chip>{" "}
                      </Td>
                      <Td>
                        <FiEdit />
                      </Td>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalDataCnt={data.length}
          />
        </TableWithPagination>
      </div>
      {/*  */}
      <div className="  w-full  mb-10 ">
        <div className="mb-[20px]">
          <p className="text-[32px]">Holiday</p>
        </div>
        <div className="w-full  flex gap-10  justify-between">
          <div className="border w-[500px]   justify-center items-center p-10 rounded-[24px]">
            <p className="text-[24px]">Calendar</p>
            <Calendar />
          </div>
          <div className="border w-[800px] justify-center items-center p-10 rounded-[24px]  ">
            <p className="text-[24px] mb-5 ">List of Holiday</p>
            <UpcommingHolidays />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
