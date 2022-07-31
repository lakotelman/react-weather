import { useContext } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

export default function Navbar() {
  const { logout, user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateHome = () => {
    logout();
    setUser([{ loggedIn: false }]);
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className=" bg-slate-600 p-6 text-white w-screen font-serif">
        <h2 className=" text-2xl">
          <Link to="/">Whether Weather</Link>
        </h2>
        {user.loggedIn ? (
          <ul className="flex justify-around mt-2 ">
            <li className="hover:bg-yellow-300 hover:text-slate-600 p-1 rounded-full">
              <Link to="/cities">My Cities</Link>
            </li>
            <li className=" bg-slate-500 hover:bg-yellow-300 hover:text-slate-600 p-1 rounded-full">
              <button onClick={navigateHome}>Logout</button>
            </li>
            <li className="hover:bg-yellow-300 hover:text-slate-600 p-1 rounded-full">
              <Link to="/any">Quick View</Link>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
