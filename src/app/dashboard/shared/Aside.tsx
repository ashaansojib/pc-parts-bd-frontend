import React from "react";
import Profile from "./Profile";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Aside = () => {
  return (
    <div className="border p-2">
      <Profile />
      <Link className="dashboard-menu" href="/dashboard">
        Dashboard <FaArrowRight className="dash-icon" />
      </Link>
      <Link className="dashboard-menu" href="/dashboard/products">
        Products <FaArrowRight className="dash-icon" />
      </Link>
      <Link className="dashboard-menu" href="/dashboard/navigation">
        Menu Bar <FaArrowRight className="dash-icon" />
      </Link>
      <Link className="dashboard-menu" href="/">
        Logout <FaArrowRight className="dash-icon" />
      </Link>
    </div>
  );
};

export default Aside;
