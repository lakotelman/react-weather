import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className=" bg-slate-600 p-6 text-white w-screen font-serif">
        <h2 className=" text-2xl"><Link to="/">Whether Weather</Link></h2>
        <ul className="flex justify-around ">
          <li className="hover:bg-yellow-300 hover:text-slate-600 p-1 rounded-full">
            <Link to="/cities">My Cities</Link>
          </li>
          <li className="hover:bg-yellow-300 hover:text-slate-600 p-1 rounded-full">
            <Link to="/any">Quick View</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
