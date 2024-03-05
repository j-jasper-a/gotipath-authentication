import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-8 gap-8">
      <div className="flex flex-col gap-8">
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
          <span className="text-brand">John Smith</span>.
        </p>
      </div>
      <button
        className="bg-brand text-white w-full text-sm py-3 rounded-md cursor-default hover:brightness-95 max-w-[400px]"
        type="submit"
      >
        Sign Out
      </button>
    </div>
  );
}
