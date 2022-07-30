import { Link } from "react-router-dom";
export default function CityCard(props) {
  return (
    <div className=" bg-slate-800 w-48 p-7 text-white rounded-lg">
      <h1 className="text-2xl">{props.city.city}</h1>
      <button className=" bg-slate-500 p-2 rounded-full mt-4 hover:bg-yellow-300 hover:text-slate-800">
      <Link to={"/cities/" + props.city.city}> View Weather</Link>
      </button>
    </div>
  );
}
