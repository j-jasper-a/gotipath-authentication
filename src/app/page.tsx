import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          className="text-brand text-2xl hover:brightness-75 font-medium"
          href={"/dashboard"}
        >
          Try visiting the dashboard by clicking me.
        </Link>
        <p className="text-sm text-neutral-600">
          <span className="font-bold text-rose-400">IMPORTANT:</span> Please,
          only use GitHub to sign in. Other methods are not currently supported.
        </p>
        <p>Jihan Jasper Al Rashid</p>
      </div>
    </div>
  );
}
