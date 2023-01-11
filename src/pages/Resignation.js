import React, { useState } from "react";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button";
import ConfirmPasswordCard from "../custom_components/ConfirmPasswordCard";
import ResonsForLeaving from "../custom_components/ResonsForLeaving";

const Resignation = () => {
  let [index, setIndex] = useState(0);
  let tab = [
    <ConfirmPasswordCard setIndex={setIndex} />,
    <ResonsForLeaving setIndex={setIndex} />,
  ];

  return <div className="flex mb-[11em]">{tab[index]}</div>;
};

export default Resignation;
