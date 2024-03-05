"use client";

import AuthPage from "@/components/common/AuthPage";
import LoginProviders from "@/components/common/LoginProviders";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <AuthPage>
      {" "}
      <div className="w-full max-w-[400px] flex flex-col gap-4">
        <Image
          className="shadow-md rounded-md overflow-hidden"
          src={"/assets/images/icons/auth-icon.svg"}
          alt="Logo"
          width={40}
          height={40}
        />
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold">Complete Information</p>
          <p className="text-neutral-600">
            Enter the fields below to get started.
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col text-sm gap-2">
            <label className="font-medium" htmlFor="accounttype">
              Select Account Type
            </label>
            <div className="grid gap-2 grid-cols-2 bg-neutral-100 p-1 items-center justify-center rounded-md">
              <div className="flex gap-2 bg-white p-2 rounded-md justify-center items-center">
                <Image
                  src={"/assets/images/icons/personal-icon.svg"}
                  alt="Personal icon"
                  width={14}
                  height={14}
                />
                <p className="text-sm font-bold">Personal</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <Image
                  src={"/assets/images/icons/corporate-icon.svg"}
                  alt="Corporate icon"
                  width={14}
                  height={14}
                />
                <p className="text-sm">Corporate</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-sm gap-2">
            <label className="font-medium" htmlFor="name">
              Name
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="border-[1px] border-neutral-200 py-2 px-2 rounded-md focus:ring-0 focus:outline-none focus:border-brand"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
              />
              <input
                className="border-[1px] border-neutral-200 py-2 px-2 rounded-md focus:ring-0 focus:outline-none focus:border-brand"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col text-sm gap-2">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="border-[1px] border-neutral-200 py-2 px-2 rounded-md focus:ring-0 focus:outline-none focus:border-brand"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="flex flex-col text-sm gap-2">
            <label className="font-medium" htmlFor="password">
              Create a password
            </label>
            <input
              className="border-[1px] border-neutral-200 py-2 px-2 rounded-md focus:ring-0 focus:outline-none focus:border-brand"
              type="password"
              name="password"
              id="password"
              placeholder="Enter new password"
            />
          </div>
          {/* Enter phone number. */}
          <button
            className="bg-brand text-white w-full text-sm py-3 rounded-md cursor-default hover:brightness-95"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="flex gap-4 items-center w-full">
          <hr className="w-full" />
          <p className="text-sm text-neutral-600 font-medium">or</p>
          <hr className="w-full" />
        </div>
        <LoginProviders variant="register" />
      </div>
    </AuthPage>
  );
}
