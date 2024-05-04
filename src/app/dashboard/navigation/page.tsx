"use client";
import React from "react";
import { DashboardTitle } from "../shared/DashboardTitle";
import { FaEdit } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  name: string;
  link: string;
};

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  // hadler of toast
  const handleToaster = () => {
    toast.error("This is Admin actions!");
  };
  return (
    <>
      <Toaster position="top-right" />
      <DashboardTitle title="You Can Manage Navigation Here!" />
      <div className="p-2 grid lg:grid-cols-3 grid-cols-1 gap-4 justify-between">
        {/* add menu form */}
        <div className="col-span-2">
          <h3 className="text-accent font-medium border-b">Add Menu..</h3>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between py-2">
                <input placeholder="Menu Title" {...register("name")} />
                <input
                  placeholder="Menu Link"
                  {...register("link", { required: true })}
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.link && (
                <span className="error-btn">This field is required</span>
              )}

              <input type="submit" className="submit-btn" />
            </form>
          </div>
        </div>
        {/* show menu items */}
        <div>
          <h3 className="text-accent font-medium border-b">Menu Lists..</h3>
          <div className="bg-secondary p-2 flex gap-2 items-center mb-2 hover:bg-white">
            <p className="font-medium">Home -</p>
            <span className="text-xs">/home</span>
            <FaEdit onClick={handleToaster} />
          </div>
          <div className="bg-secondary p-2 flex gap-2 items-center">
            <p className="font-medium">Products -</p>
            <span className="text-xs">/pds</span>
            <FaEdit />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
