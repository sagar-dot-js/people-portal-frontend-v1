import React, { useState } from "react";
import FinancialDetails from "../custom_components/FinancialDetails";
import IdentificationDetails from "../custom_components/IdentificationDetails";

const FirstTimeLoginPage = () => {
  let [tab, setTab] = useState(0);
  let pages = [
    <FinancialDetails tab={tab} setTab={setTab} />,
    <IdentificationDetails tab={tab} setTab={setTab} />,
  ];

  return (
    <div className="h-full w-full flex flex-col items-center px-[100px] justify-center">
      {/* <FinancialDetails /> */}
      {/* <IdentificationDetails /> */}
      {pages[tab]}
    </div>
  );
};

export default FirstTimeLoginPage;
