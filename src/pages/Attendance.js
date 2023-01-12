import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import Dropdown from "../components/Dropdown/Dropdown";
import Link from "../components/Link/Link";
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
import { useState } from "react";
import TablePagination from "../components/Table/TablePagination";
import months from "../json-data/months.json";
import years from "../json-data/years.json";
import Modal from "../components/Modal/Modal";
import { ModalContent } from "../components/Modal/Modal.style";
import EditAttendance from "../custom_components/forms/EditAttendance";
import Chip from "../components/Chips/Chip";

const newData = months.map((item) => {
  return { label: item.name, value: item.abbreviation };
});

const Attendance = () => {
  const data = [
    {
      date: "25 - 09 - 2022",
      days: "Monday",
      status: "Present",
      check_in: "00:00:00 Am",
      check_out: "00:00:00 Pm",
      duration: "00:00:00",
      overtime: "00:00:00",
      breaktime: "00:00:00",
    },
    {
      date: "25 - 09 - 2022",
      days: "Wedesday",
      status: "Present",
      check_in: "00:00:00 Am",
      check_out: "00:00:00 Pm",
      duration: "00:00:00",
      overtime: "00:00:00",
      breaktime: "00:00:00",
    },
    {
      date: "25 - 09 - 2022",
      days: "Friday",
      status: "Half Day",
      check_in: "00:00:00 Am",
      check_out: "00:00:00 Pm",
      duration: "00:00:00",
      overtime: "00:00:00",
      breaktime: "00:00:00",
    },
    {
      date: "25 - 09 - 2022",
      days: "Sunday",
      status: "Weekend",
      check_in: "00:00:00 Am",
      check_out: "00:00:00 Pm",
      duration: "00:00:00",
      overtime: "00:00:00",
      breaktime: "00:00:00",
    },
    {
      date: "25 - 09 - 2022",
      days: "Monday",
      status: "Holiday",
      check_in: "00:00:00 Am",
      check_out: "00:00:00 Pm",
      duration: "00:00:00",
      overtime: "00:00:00",
      breaktime: "00:00:00",
    },
    {
      date: "25 - 09 - 2022",
      days: "Tuesday",
      status: "Present",
      check_in: "00:00:00 Am",
      check_out: "00:00:00 Pm",
      duration: "00:00:00",
      overtime: "00:00:00",
      breaktime: "00:00:00",
    },
  ];

  const overTimeData = [
    {
      date: "25 - 09 - 2022",
      days: "Monday",
      StartOvertime: "00:00:00 Am",
      EndOvertime: "00:00:00 Am",
      OvertimeDuration: " 00:00:00",
      Status: "Approved",
    },
    {
      date: "25 - 09 - 2022",
      days: "Monday",
      StartOvertime: "00:00:00 Am",
      EndOvertime: "00:00:00 Am",
      OvertimeDuration: " 00:00:00",
      Status: "Approved",
    },
    {
      date: "25 - 09 - 2022",
      days: "Monday",
      StartOvertime: "00:00:00 Am",
      EndOvertime: "00:00:00 Am",
      OvertimeDuration: " 00:00:00",
      Status: "Approved",
    },
    {
      date: "25 - 09 - 2022",
      days: "Monday",
      StartOvertime: "00:00:00 Am",
      EndOvertime: "00:00:00 Am",
      OvertimeDuration: " 00:00:00",
      Status: "Approved",
    },
    {
      date: "25 - 09 - 2022",
      days: "Monday",
      StartOvertime: "00:00:00 Am",
      EndOvertime: "00:00:00 Am",
      OvertimeDuration: " 00:00:00",
      Status: "Approved",
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showModalEditRequest, setShowModalEditRequest] = useState(false);
  const [showModalDeleteRequest, setShowModalDeleteRequest] = useState(false);
  const [showModalOvertimeRequest, setShowModalOvertimeRequest] =
    useState(false);

  const openModalEdit = () => {
    setShowModalEditRequest((prev) => !prev);
  };

  const openModalDelete = () => {
    setShowModalDeleteRequest((prev) => !prev);
  };

  const openModalOvertimeRequest = () => {
    setShowModalOvertimeRequest((prev) => !prev);
  };

  let cardData = [
    {
      title: "Date",
      subTitle: "23/09/2021",
    },
    {
      title: "Check In",
      subTitle: "09:01:35 Am",
    },
    {
      title: "Check Out",
      subTitle: "07:01:35 Pm",
    },
    {
      title: "Duration",
      subTitle: "10:09:05 Hrs",
    },
    {
      title: "Overtime",
      subTitle: "24:00:00 Hrs",
    },
  ];

  let ProductionType = [
    {
      label: "type1",
      value: "type1",
    },
  ];

  let overtimeData = [
    {
      label: "60 Minuts",
      value: "60 Minuts",
    },
    {
      label: "30 Minuts",
      value: "30 Minuts",
    },
  ];

  console.log(newData);

  return (
    <div className=" custom-px  mb-[100px]">
      <div>
        <Modal
          showModal={showModalEditRequest}
          setShowModal={setShowModalEditRequest}
        >
          <ModalContent>
            <EditAttendance />
          </ModalContent>
        </Modal>
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
      <div className="flex justify-between  custom-py ">
        <div>
          <p className=" text-[32px] text-[#1765DC]">Attendance</p>
          <p className="text-[#8CB5F3]">
            Welcome to <span className="text-[#1765DC]">Mirats </span>{" "}
            Employee’s Dashboard
          </p>
        </div>

        <div className=" flex gap-5">
          <div className=" bg-[#1765DC] flex items-center px-[20px]  h-[56px] justify-between  gap-3 font-[600] counter-btn-active ">
            <div>
              {" "}
              <MdOutlineAccessTime className=" text-[40px]" />
            </div>
            <div className="">
              <p className="text-[16px]">Check In </p>
              <p className="text-[14px]">00:00:00 Hrs</p>
            </div>
          </div>
          <div className="  flex items-center px-[20px] h-[56px] justify-between  gap-3 font-[600] counter-btn-inactive ">
            <div>
              {" "}
              <MdOutlineAccessTime className=" text-[40px]" />
            </div>
            <div className="">
              <p className="text-[16px]">Break Time </p>
              <p className="text-[14px]">00:00:00 Hrs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between  ">
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

      <div className="flex justify-between w-full  my-14 ">
        <div className=" w-[80%] flex justify-between items-center">
          <Dropdown dropdownText="Month" options={newData} />
          <Dropdown dropdownText="Year" options={years} />
          <Dropdown dropdownText="Production Type" options={ProductionType} />
          <Dropdown dropdownText="Overtime" options={overtimeData} />

          <button className="border-b-[2px] border-[#1765DC] text-[#1765DC] font-[600]">
            Clear Filters
          </button>
        </div>
      </div>
      {/*  */}
      <div className=" flex flex-col ">
        <TableActionPopUp selectedRows={selectedRows}>
          <div className="flex gap-5">
            <button
              onClick={() => openModalEdit()}
              className=" border-2 rounded-lg px-[10px] py-[2px]"
            >
              Edit Request for Attendance
            </button>
            <button
              onClick={() => openModalDelete()}
              className=" border-2 rounded-lg px-[10px] py-[2px]"
            >
              Delete Request for Attendance
            </button>
          </div>
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
                <Th>Days</Th>
                <Th>Status</Th>
                <Th>Check In</Th>
                <Th>Check Out</Th>
                <Th>Duration</Th>
                <Th>Overtime</Th>
                <Th>Breaktime</Th>
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
                      <Td>
                        <input
                          type="checkbox"
                          checked={selectedRows.filter((r) => r.id === d.id)[0]}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRows((prev) => [...prev, d]);
                            } else
                              setSelectedRows((prev) => {
                                return prev.filter((pd) => {
                                  return pd.id !== d.id;
                                });
                              });
                          }}
                        />
                      </Td>

                      <Td>{d.date}</Td>

                      <Td>{d.days}</Td>
                      <Td>
                        <p
                          className={`${
                            d.status == "Weekend" || d.status == "Holiday"
                              ? "holliday"
                              : null
                          }`}
                        >
                          {" "}
                          {d.status}
                        </p>{" "}
                      </Td>
                      <Td>{d.check_in}</Td>
                      <Td>{d.check_out}</Td>
                      <Td>{d.duration}</Td>
                      <Td>{d.overtime}</Td>
                      <Td>{d.breaktime}</Td>
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

      <div className="py-[40px] text-[#333333] text-[24px]">
        <p>Overtime Request</p>
      </div>
      <div className="w-full flex justify-between  ">
        <div className="flex gap-[30px] items-end">
          <Dropdown
            dropdownText="Month"
            options={newData}
            // onClick={() => console.log("working?")}
            onChange={(e) => console.log(e)}
          />
          <Dropdown
            dropdownText="Year"
            options={years}
            // onClick={() => console.log("working?")}
            onChange={(e) => console.log(e)}
          />
          <Link
            color="#1765DC"
            href="https://scalablecss.com/styled-components-global-styles/"
          >
            Clear Filters
          </Link>
        </div>
        <div>
          <Button variant="filled" onClick={() => openModalOvertimeRequest()}>
            Request for Overtime
          </Button>
        </div>
      </div>
      <div className="mt-[50px]">
        <TableActionPopUp selectedRows={selectedRows}>
          <div className="flex gap-5">
            <button
              onClick={() => openModalEdit()}
              className=" border-2 rounded-lg px-[10px] py-[2px]"
            >
              Edit Request for Attendance
            </button>
            <button
              onClick={() => openModalDelete()}
              className=" border-2 rounded-lg px-[10px] py-[2px]"
            >
              Delete Request for Attendance
            </button>
          </div>
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
                <Th>Days</Th>
                <Th>Start Overtime</Th>
                <Th>End Overtime</Th>
                <Th>Overtime Duration</Th>
                <Th>Status</Th>
              </TableRow>
            </TableHead>
            <TableBody>
              {overTimeData
                ?.slice(
                  pageNumber * rowsPerPage - rowsPerPage,
                  pageNumber * rowsPerPage
                )
                .map((d, i) => {
                  return (
                    <TableRow key={i}>
                      <Td>
                        <input
                          type="checkbox"
                          checked={selectedRows.filter((r) => r.id === d.id)[0]}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRows((prev) => [...prev, d]);
                            } else
                              setSelectedRows((prev) => {
                                return prev.filter((pd) => {
                                  return pd.id !== d.id;
                                });
                              });
                          }}
                        />
                      </Td>

                      <Td>{d.date}</Td>

                      <Td>{d.days}</Td>
                      <Td>{d.StartOvertime}</Td>
                      <Td>{d.EndOvertime}</Td>
                      <Td>{d.OvertimeDuration}</Td>
                      <Td>
                        <Chip variant="filled">{d.Status}</Chip>{" "}
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
      <div>
        <Modal
          showModal={showModalOvertimeRequest}
          setShowModal={setShowModalOvertimeRequest}
        >
          <ModalContent>
            <div className=" w-[500px]">
              <p className="text-[#333333] font-[700] text-[20px]  pb-[20px] text-center">
                Request For Overtime{" "}
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p> Date * </p>
                  <input
                    type="date"
                    className="w-full h-[40px] px-[16px] py-[8px] border-2 rounded-[8px] mt-[8px]"
                  />
                </div>
                <div>
                  <p> Start Overtime * </p>

                  <input
                    type="time"
                    className="w-full h-[40px] px-[16px] py-[8px] border-2 rounded-[8px] mt-[8px]"
                  />
                </div>
                <div>
                  <p> End Overtime *</p>
                  <input
                    type="time"
                    className="w-full h-[40px] px-[16px] py-[8px] border-2 rounded-[8px] mt-[8px]"
                  />
                </div>
                <Button
                  variant="filled"
                  onClick={() => openModalOvertimeRequest()}
                >
                  Send Request
                </Button>
              </div>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Attendance;
