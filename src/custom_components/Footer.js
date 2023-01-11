import React from "react";

const Footer = () => {
  return (
    <div className="custom-px footer h-[80px] border flex items-center justify-between ">
      <div>
        <p>Copyright (c) 2022 Mirats Insights, LLC. All rights reserved.</p>{" "}
      </div>
      <div className="flex gap-2">
        <a href="www.google.com"> Privacy Policy </a>|
        <a href="www.google.com"> Terms of Use </a>|
        <a href="www.google.com"> Privacy Policy </a>|
        <a href="www.google.com">Legal </a>|
        <a href="www.google.com">Sitemap </a>
      </div>
      <div>भारत</div>
    </div>
  );
};

export default Footer;
