import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-8 text-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          className="text-2xl font-bold text-brand hover:brightness-75"
          href={"/dashboard"}
        >
          Try visiting the dashboard by clicking me.
        </Link>
        <p className="text-sm text-neutral-600">
          Please, only use GitHub to sign in. Other methods are not currently
          supported.
        </p>
        <p className="text-xs font-medium">Jihan Jasper Al Rashid</p>
      </div>
    </div>
  );
}
