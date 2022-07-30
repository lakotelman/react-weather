import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { DefaultLayout } from "../layouts/Default";
import { Navigate, Route } from "react-router-dom";

function Home() {
  const { login, user } = useContext(AuthContext);
  return (
    <>
        {(user.loggedIn) ? 
          <Navigate to ="/cities"/>
        : 
          <div className="flex h-[85vh]">
            <div className="m-auto">
              <h1 className="text-3xl">Welcome to Whether Weather</h1>
              <p>Please sign into your account</p>
              <button
                onClick={login}
                className=" text-white bg-slate-500 p-2 rounded-full mt-4 hover:bg-yellow-300 hover:text-slate-800"
              >
                Sign In
              </button>
            </div>
          </div>
        }</>
  );
}

export default function Page() {
  return DefaultLayout({ children: Home() });
}
