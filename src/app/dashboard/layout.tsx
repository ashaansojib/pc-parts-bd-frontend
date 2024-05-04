import React from "react";
import Aside from "./shared/Aside";
interface layoutPros {
  children: React.ReactNode;
}
const layout = ({ children }: layoutPros) => {
  return (
    <div className="my-container gap-2 justify-between grid grid-cols-4 relative">
      <div className="lg:h[450px] sticky top-0 left-0">
        <Aside />
      </div>
      <div className="col-span-3 border">{children}</div>
    </div>
  );
};

export default layout;
