// "use client";

import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { options } from "../api/auth/[...nextauth]/options";
import SignOutButton from "@/components/common/SignOutButton";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-8 gap-8">
      <div className="flex flex-col gap-8 items-center">
        <p className="text-2xl font-medium">
          This dashboard is{" "}
          <span className="font-bold text-green-500">protected</span>.
        </p>
        <div>
          <Image
            className="w-full h-full object-cover object-center"
            src={"/assets/images/dashboard-graphic.svg"}
            alt="A photo of a car's dashboard"
            width={800}
            height={800}
          />
        </div>
        <p className="font-medium">
          You are successfully signed in,{" "}
          <span className="text-brand">{session?.user?.name}</span>.
        </p>
      </div>
      <div className="w-full max-w-[400px]">
        <SignOutButton />
      </div>
    </div>
  );
}
