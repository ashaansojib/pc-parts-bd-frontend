import Image from "next/image";
import React from "react";

const FooterHead = () => {
  return (
    <>
    <div className="py-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-2">
      <div className="text-white">
        <Image src="/white-logo.png" alt="logo" width="180" height="50" />
      </div>
      <div className="text-white">
        <input type="text " />
      </div>
      <div className="text-white">footer head</div>
      <div className="text-white">footer head</div>
    </div>
    <div className="py-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-2">
      <div className="text-white">
        <Image src="/white-logo.png" alt="logo" width="180" height="50" />
      </div>
      <div className="text-white">footer head</div>
      <div className="text-white">footer head</div>
      <div className="text-white">footer head</div>
    </div>
    </>
  );
};

export default FooterHead;
