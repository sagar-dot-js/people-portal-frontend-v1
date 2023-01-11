import React from "react";
import Button from "../../components/Button";

const EditAttendance = () => {
  return (
    <div className="h-[600px] w-[500px] editAttendance ">
      <h2 className=" text-[24px] text-[#333] text-center pb-2 border-b-2 border-grey-600">
        Edit Attendance
      </h2>
      <div className="mt-4 flex flex-col gap-2 ">
        <div>
          <p className="">Date * </p>
          <input type="date" />
        </div>
        <div>
          <p className="">Status * </p>
          <select>
            <option>Prestent</option>
            <option>Absent</option>
          </select>
        </div>
        <div>
          <p className="">Check In * </p>
          <input type="date" />
        </div>
        <div>
          <p className="">Check Out *</p>
          <input type="date" />
        </div>
        <div>
          <p className="">Reason*</p>
          <textarea className="h-[120px]" />
        </div>
        <div className="">
          <Button
            className="w-full"
            onClick={(e) => console.log("its working", e)}
            variant="filled"
          >
            Send Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditAttendance;
