"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ImageUploader from "@/components/dashboard/ImageUploader";
import Link from "next/link";
import Calanderly from "./Calenderly";
import { PAGE_LIST } from "@/utils/helper";
import DisplayText from "./DisplayText";

const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  const [open, setOpen] = useState(0);
  const [value, setValue] = useState(false);
  const dashBoardHandler = () => setValue(!value);
  const handleButtonClick = (index: any) => {
    setOpen(open === index ? false : index);
  };

  return (
    <div className="flex min-h-screen w-full pl-[300px] relative max-lg:px-5">
      <div
        className={`flex flex-col py-10 px-5 max-lg:z-10 bg-black text-white w-[300px] fixed top-0 left-0 min-h-screen justify-between duration-300 ease-linear transition-all ${
          value ? "max-lg:left-0" : "max-lg:-left-full"
        }`}
      >
        <div className="flex flex-col gap-2">
          <h1 className="mb-3 text-left pl-4 text-3xl font-semibold">
            Page links
          </h1>
          {PAGE_LIST.map((obj, i) => (
            <Link
              href={`/dashboard?page=${obj.toLowerCase().replace(" ", "-")}`}
              onClick={() => handleButtonClick(i)}
              key={i}
              className={`${
                page === obj.toLowerCase().replace(" ", "-") &&
                "bg-white text-black"
              } py-2 px-3 rounded-lg cursor-pointer hover:bg-white/50 transition-all duration-300 hover:text-black`}
            >
              {obj}
            </Link>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 py-2 px-3 rounded-lg text-white border border-transparent hover:text-red-500 hover:bg-white hover:border-red-500 duration-300 ease-linear"
        >
          Logout
        </button>
      </div>
      <div className="w-full pt-20">
        <div className="bg-orange-500 py-5 px-3 w-full fixed top-0 max-lg:left-0 max-lg:pt-8">
          <h2 className="text-white font-semibold font-inter text-2xl">
            {page === "page-1"
              ? "Displayed text"
              : page === "page-2"
              ? "Calendly"
              : page === "page-3"
              ? "Upload Image"
              : "Welcome To My Dashboard"}
          </h2>
        </div>
        {page === "page-1" ? (
          <DisplayText />
        ) : page === "page-2" ? (
          <Calanderly />
        ) : page === "page-3" ? (
          <ImageUploader />
        ) : null}
      </div>
      <div
        onClick={dashBoardHandler}
        className="z-50 flex-col gap-1 lg:hidden flex cursor-pointer fixed left-5 top-2"
      >
        <span
          className={`${
            value
              ? "w-7 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded"
              : "w-7 h-1 bg-black duration-300 ease-linear rounded"
          }`}
        ></span>
        <span
          className={`${
            value
              ? "w-7 h-1 bg-white translate-x-10 opacity-0 duration-300 ease-linear"
              : "w-7 h-1 bg-black duration-700 ease-linear rounded"
          }`}
        ></span>
        <span
          className={`${
            value
              ? "w-7 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded"
              : "w-7 h-1 bg-black duration-300 ease-linear rounded"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Dashboard;
