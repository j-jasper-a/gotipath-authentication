import Image from "next/image";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const AuthPage = ({ children }: Props) => {
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="flex flex-col justify-between items-center p-6">
        <Image
          className="self-start w-40 h-auto"
          src={"/assets/images/logo-full.svg"}
          alt="Logo"
          width={200}
          height={200}
        />
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
      <div className="hidden md:block w-full h-full overflow-hidden">
        <Image
          className="w-full h-full object-cover object-center"
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
