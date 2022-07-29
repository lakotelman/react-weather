import { DefaultLayout } from "../layouts/Default";

function Home() {
  return (
    <>
      <div className="flex h-[85vh]">
        <div className="m-auto">
          <h1 className="text-3xl">Welcome to Whether Weather</h1>
          <p>Please sign into your account</p>
          <button className=" text-white bg-slate-500 p-2 rounded-full mt-4 hover:bg-yellow-300 hover:text-slate-800">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default function Page() {
  return DefaultLayout({ children: Home() });
}
