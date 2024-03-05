"use client";

import AuthPage from "@/components/common/AuthPage";
import LoginProviders from "@/components/common/LoginProviders";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <AuthPage>
      <div className="w-full max-w-[400px] flex flex-col gap-4">
        <Image
          className="shadow-md rounded-md overflow-hidden"
          src={"/assets/images/icons/auth-icon.svg"}
          alt="Logo"
          width={40}
          height={40}
        />
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold">Sign in to account</p>
          <p className="text-neutral-600">
            Enter your credentials to access your account
          </p>
        </div>
        <form className="flex flex-col gap-4">
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
              Password
            </label>
            <input
              className="border-[1px] border-neutral-200 py-2 px-2 rounded-md focus:ring-0 focus:outline-none focus:border-brand"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <input
                className="accent-brand"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <p className="text-sm text-neutral-600">
                Remember me for 7 days.
              </p>
            </div>
            <Link className="font-medium text-brand" href={"/"}>
              Forgot Password?
            </Link>
          </div>
          <button
            className="bg-brand text-white w-full text-sm py-3 rounded-md cursor-default hover:brightness-95"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="flex gap-4 items-center w-full">
          <hr className="w-full" />
          <p className="text-sm text-neutral-600 font-medium">or</p>
          <hr className="w-full" />
        </div>
        <LoginProviders variant="login" />
      </div>
    </AuthPage>
  );
}
