"use client";

import AuthPage from "@/components/common/AuthPage";
import LoginProviders from "@/components/common/LoginProviders";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <AuthPage>
      {" "}
      <div className="flex w-full max-w-[400px] flex-col gap-4">
        <Image
          className="overflow-hidden rounded-md shadow-md"
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
          <div className="flex flex-col gap-2 text-sm">
            <label className="font-medium" htmlFor="accounttype">
              Select Account Type
            </label>
            <div className="grid grid-cols-2 items-center justify-center gap-2 rounded-md bg-neutral-100 p-1">
              <div className="flex items-center justify-center gap-2 rounded-md bg-white p-2">
                <Image
                  src={"/assets/images/icons/personal-icon.svg"}
                  alt="Personal icon"
                  width={14}
                  height={14}
                />
                <p className="text-sm font-bold">Personal</p>
              </div>
              <div className="flex items-center justify-center gap-2">
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
          <div className="flex flex-col gap-2 text-sm">
            <label className="font-medium" htmlFor="name">
              Name
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="rounded-md border-[1px] border-neutral-200 px-2 py-2 focus:border-brand focus:outline-none focus:ring-0"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
              />
              <input
                className="rounded-md border-[1px] border-neutral-200 px-2 py-2 focus:border-brand focus:outline-none focus:ring-0"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-md border-[1px] border-neutral-200 px-2 py-2 focus:border-brand focus:outline-none focus:ring-0"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <label className="font-medium" htmlFor="password">
              Create a password
            </label>
            <input
              className="rounded-md border-[1px] border-neutral-200 px-2 py-2 focus:border-brand focus:outline-none focus:ring-0"
              type="password"
              name="password"
              id="password"
              placeholder="Enter new password"
            />
          </div>
          {/* Enter phone number. */}
          <button
            className="w-full cursor-default rounded-md bg-brand py-3 text-sm text-white hover:brightness-95"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="flex w-full items-center gap-4">
          <hr className="w-full" />
          <p className="text-sm font-medium text-neutral-600">or</p>
          <hr className="w-full" />
        </div>
        <LoginProviders variant="register" />
      </div>
    </AuthPage>
  );
}
