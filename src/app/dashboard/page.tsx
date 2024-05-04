"use client"
import React from "react";
import { DashboardTitle } from "./shared/DashboardTitle";
import { SubmitHandler, useForm } from "react-hook-form";

const page = () => {

  return (
    <div>
      <DashboardTitle title="All Products Manage Here!" />
      <div>
        <div>
            all products
        </div>
      </div>
    </div>
  );
};

export default page;
