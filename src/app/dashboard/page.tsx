"use client";
import React, { useEffect, useState } from "react";
import { DashboardTitle } from "./shared/DashboardTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
interface ProductsProps {
  id: string;
  name: string;
  image: string;
  price: string;
}
const page = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  useEffect(() => {
    fetch("/fake/case.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  // hadler of toast
  const handleToaster = () => {
    toast.error("This is Admin actions!");
  };
  return (
    <>
      <Toaster position="top-right" />
      <DashboardTitle title="All Products Manage Here!" />
      <div>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>SL</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, i) => (
              <TableRow key={product.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>PC Case</TableCell>
                <TableCell className="flex gap-2 items-center">
                  <FaEdit
                    onClick={handleToaster}
                    className="text-xl cursor-pointer"
                  />
                  <FaDeleteLeft
                    onClick={handleToaster}
                    className="text-xl cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      </div>
    </>
  );
};

export default page;
