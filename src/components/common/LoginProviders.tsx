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
          className="flex h-10 w-10 items-center justify-center rounded-md border-[1px] border-neutral-200 bg-green-100 shadow-sm"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >
          <Image
            src={"/assets/images/icons/github-icon.svg"}
            alt="GitHub icon"
            width={24}
            height={24}
          />
        </button>
        <p className="flex h-10 w-10 items-center justify-center rounded-md border-[1px] border-neutral-200 shadow-sm">
          G
        </p>
        <p className="flex h-10 w-10 items-center justify-center rounded-md border-[1px] border-neutral-200 shadow-sm">
          S
        </p>
        <p className="flex h-10 w-10 items-center justify-center rounded-md border-[1px] border-neutral-200 shadow-sm">
          O
        </p>
      </div>
      <p className="flex items-center gap-2">
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
