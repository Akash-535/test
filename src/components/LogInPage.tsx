"use client";
import { GoogleIcon, PageLogoIcon } from "@/utils/Icons";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Image from "next/image";
import pageImage from "../../public/assets/images/lyriesweb-image.webp";
import Link from "next/link";

const LogInPage = () => {
  const logInData = {
    email: "",
    password: "",
  };
  const [value, setValue] = useState(logInData);
  const [error, setError] = useState(false);

  const pageInfoHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setError(true);
    if (value.email && value.password) {
      setError(false);
      setValue(logInData);
      localStorage.setItem("isAuthenticated", "true");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-[30px] pr-7 max-lg:pt-8 max-lg:pb-24 max-lg:px-9">
      <div className="flex w-full justify-end items-center gap-[120px] max-xl:justify-center 2xl:justify-center">
        <div className="max-w-[456px] flex justify-end flex-col max-lg:max-w-[320px] max-lg:mx-auto">
          <Link href="#">
            <PageLogoIcon />
          </Link>
          <div className="pt-[138px] max-lg:pt-[90px]">
            <h1 className="text-3xl font-semibold leading-[58px] text-light-black tracking-[1.22px]">
              Welcome Back
            </h1>
            <p className="text-sm font-normal leading-[30px] text-light-gray pl-0.5">
              Welcome back! Please enter your details.
            </p>
            <form className="pt-8">
              <div className="pb-0.5">
                <p className="pb-1.5 text-base leading-5 font-medium text-again-black">
                  Email
                </p>
                <input
                  type="email"
                  onChange={(e) =>
                    setValue({ ...value, email: e.target.value })
                  }
                  value={value.email}
                  className={`placeholder:text-sm placeholder:leading-6 placeholder:font-medium text-light-gray text-sm leading-6 font-medium w-[456px] py-[19px] max-lg:w-[320px] px-3.5 border rounded-lg outline-none ${
                    error && !value.email
                      ? "placeholder:text-red-500 border-red-500"
                      : "placeholder:text-light-gray border-light-white"
                  }`}
                  placeholder={
                    error && !value.email ? "Email is required" : "Email"
                  }
                />
              </div>
              <div className="pt-4">
                <p className="pb-1.5 text-base leading-5 font-medium text-again-black">
                  Password
                </p>
                <input
                  type="password"
                  onChange={(e) =>
                    setValue({ ...value, password: e.target.value })
                  }
                  value={value.password}
                  className={`placeholder:text-sm placeholder:leading-6 placeholder:font-medium text-light-gray text-sm leading-6 font-medium w-[456px] max-lg:w-[320px] py-[19px] px-3.5 border rounded-lg outline-none ${
                    error && !value.password
                      ? "placeholder:text-red-500 border-red-500"
                      : "placeholder:text-light-gray border-light-white"
                  }`}
                  placeholder={
                    error && !value.password
                      ? "Password is required"
                      : "Password"
                  }
                />
              </div>
              <div className="pt-[18px] flex justify-between max-w-[456px] max-md:flex-col max-md:gap-3.5">
                <div className="flex gap-3 items-center">
                  <input
                    id="checkBox"
                    type="checkbox"
                    className="border-light-white border cursor-pointer rounded-md outline-none"
                  />
                  <label
                    htmlFor="checkBox"
                    className="text-base font-normal leading-6 font-inter text-medium-gray cursor-pointer"
                  >
                    Remember for 30 days
                  </label>
                </div>
                <Link
                  href="#"
                  className="text-base font-normal leading-6 font-inter text-blue-500"
                >
                  Forgot password
                </Link>
              </div>
              <button
                onClick={pageInfoHandler}
                className="bg-again-black py-[8.5px] text-sm font-medium leading-6 text-white rounded-[9px] w-full max-w-[456px] mt-6 border border-transparent hover:text-black hover:bg-white hover:border-black duration-300 ease-linear max-md:mt-5"
              >
                Sign In
              </button>
            </form>
            <button className="py-[8.5px] text-sm font-medium leading-6 rounded-[9px] w-full max-w-[456px] mt-1.5 border border-light-white hover:text-white flex justify-center items-center gap-2.5 hover:bg-black duration-300 ease-linear">
              <GoogleIcon />
              Sign in with Google
            </button>
            <p className="text-center text-base pt-[18px] text-medium-gray leading-6 max-md:text-start">
              Don’t have an account?{" "}
              <Link href="#" className="pl-2.5 text-blue-500 font-inter">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="w-6/12 max-xl:hidden max-w-[759px] bg-custom-blue min-h-[899px] flex items-center justify-center rounded-[20px]">
          <Image width={617} height={541} src={pageImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
