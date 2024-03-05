import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  variant?: "login" | "register";
};

const LoginProviders = ({ variant = "login" }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p>Sign in with</p>
      <div className="flex gap-4">
        <button
          className="border-neutral-200 shadow-sm border-[1px] flex items-center justify-center w-10 h-10 bg-green-100 rounded-md"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >
          <Image
            src={"/assets/images/icons/github-icon.svg"}
            alt="GitHub icon"
            width={24}
            height={24}
          />
        </button>
        <p className="border-neutral-200 shadow-sm border-[1px] flex items-center justify-center w-10 h-10 rounded-md">
          G
        </p>
        <p className="border-neutral-200 shadow-sm border-[1px] flex items-center justify-center w-10 h-10 rounded-md">
          S
        </p>
        <p className="border-neutral-200 shadow-sm border-[1px] flex items-center justify-center w-10 h-10 rounded-md">
          O
        </p>
      </div>
      <p className="flex gap-2 items-center">
        {variant === "login"
          ? "New to Gotipath?"
          : "Already a Gotipath member?"}{" "}
        <Link
          className="font-semibold text-brand"
          href={variant === "login" ? "/register" : "/login"}
        >
          {variant === "login" ? "Create account" : "Sign in"}
        </Link>
      </p>
    </div>
  );
};

export default LoginProviders;
