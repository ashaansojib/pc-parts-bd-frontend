"use client";
import React from "react";
import { DashboardTitle } from "../shared/DashboardTitle";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateProducts = {
  title: string;
  category: string;
  info: string;
  brand: string;
  price: string;
  discount: string;
  image: string;
};
const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CreateProducts>();
  const onSubmit: SubmitHandler<CreateProducts> = (data) => {
    
    const formatedDate = {
      title: data.title,
      price: parseFloat(data.price),
      category: data.category,
      brand: data.brand,
      image: data.image,
      info: data.info,
      discount: parseFloat(data.discount),
      createdAt: new Date(),
    }
    console.log(formatedDate);
    reset();
  };

  return (
    <>
      <DashboardTitle title="Published Your Products Here!" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-2 justify-between">
            <div className="col-span-2 p-2">
              <input placeholder="Title" {...register("title")} />
              <textarea
                rows={10}
                placeholder="Description Gose Here!"
                {...register("info")}
              ></textarea>
            </div>
            <div className="bg-slate-100 p-2 space-y-2">
              <input placeholder="Category" {...register("category")} />
              <input placeholder="Brand" {...register("brand")} />
              <input placeholder="Image Link" {...register("image")} />
              <input placeholder="Price" {...register("price")} />
              <input placeholder="Discount" {...register("discount")} />
              <input type="submit" className="submit-btn" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
