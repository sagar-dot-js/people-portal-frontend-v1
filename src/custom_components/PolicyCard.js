import React from "react";

const PolicyCard = ({ data }) => {
  return (
    <div className="border w-[392px] h-[164px] rounded-[8px] p-4 flex flex-col gap-4  ">
      <p className="text-[18px]">{data.title}</p>
      <p className="text-[16px] text-[#5F5F5F] text-justify">
        {data.description}
      </p>
    </div>
  );
};

export default PolicyCard;
