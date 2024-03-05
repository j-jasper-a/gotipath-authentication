import Image from "next/image";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const AuthPage = ({ children }: Props) => {
  return (
    <div className="grid md:h-screen lg:grid-cols-2">
      <div className="flex flex-col items-center justify-between gap-4 p-6">
        <Link className="h-auto w-40 self-start" href={"/"}>
          <Image
            src={"/assets/images/logo-full.svg"}
            alt="Logo"
            width={200}
            height={200}
          />
        </Link>
        {children}
        <p className="text-sm text-neutral-600">
          By continuing, you agree to the{" "}
          <Link className="font-medium text-brand" href={"/"}>
            Legal Agreement
          </Link>{" "}
          and the{" "}
          <Link className="font-medium text-brand" href={"/"}>
            Privacy Policy
          </Link>
        </p>
      </div>
      <div className="hidden h-full w-full overflow-hidden lg:block">
        <Image
          className="h-full w-full object-cover object-center"
          src={"/assets/images/auth-graphic.webp"}
          alt="Authentication Graphic"
          width={1439}
          height={2048}
        />
      </div>
    </div>
  );
};

export default AuthPage;
