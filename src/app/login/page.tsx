"use client";

import AuthPage from "@/components/common/AuthPage";
import LoginProviders from "@/components/common/LoginProviders";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <AuthPage>
      <div className="flex w-full max-w-[400px] flex-col gap-4">
        <Image
          className="overflow-hidden rounded-md shadow-md"
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
              Password
            </label>
            <input
              className="rounded-md border-[1px] border-neutral-200 px-2 py-2 focus:border-brand focus:outline-none focus:ring-0"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
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
            className="w-full cursor-default rounded-md bg-brand py-3 text-sm text-white hover:brightness-95"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="flex w-full items-center gap-4">
          <hr className="w-full" />
          <p className="text-sm font-medium text-neutral-600">or</p>
          <hr className="w-full" />
        </div>
        <LoginProviders variant="login" />
      </div>
    </AuthPage>
  );
}
