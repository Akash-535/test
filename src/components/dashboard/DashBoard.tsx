"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import ImageUploader from "@/components/dashboard/ImageUploader";
import Link from "next/link";
import Calanderly from "./Calenderly";
import DisplayText from "./DisplayText";

const Dashboard = () => {
  const BUTTONS_LIST = ["Button 1", "Button 2", "Button 3"];
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
    <Suspense fallback={<div>Loading feed...</div>}>
      <div className="flex min-h-screen w-full pl-[300px] relative max-lg:px-5">
        <div
          className={`flex flex-col py-10 px-5 max-lg:z-10 bg-black text-white w-[300px] fixed top-0 left-0 min-h-screen justify-between duration-300 ease-linear transition-all ${
            value
              ? "max-lg:left-0"
              : "max-lg:-left-full max-lg:translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-2">
            <h1 className="mb-3 text-left pl-4 text-3xl font-semibold">
              Page links
            </h1>
            {BUTTONS_LIST.map((item, index) => (
              <Link
                href={`/dashboard?page=${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => handleButtonClick(index)}
                key={index}
                className={`${
                  page === item.toLowerCase().replace(" ", "-") &&
                  "bg-white text-black"
                } py-2 px-3 rounded-lg cursor-pointer hover:bg-white/50 transition-all duration-300 hover:text-black`}
              >
                {item}
              </Link>
            ))}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 py-2 px-3 rounded-lg text-white"
          >
            Logout
          </button>
        </div>
        <div className="w-full pt-20">
          <div className="bg-orange-500 py-5 px-3 w-full fixed top-0 max-lg:left-0 -z-10 max-lg:pt-8">
            <h1 className="text-white font-semibold font-inter text-2xl">
              Welcome to my Dashboard
            </h1>
          </div>
          {page === "button-1" ? (
            <DisplayText />
          ) : page === "button-2" ? (
            <Calanderly />
          ) : page === "button-3" ? (
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
    </Suspense>
  );
};

export default Dashboard;
