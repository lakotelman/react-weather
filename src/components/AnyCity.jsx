import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import WeatherCard from "./WeatherCard";

export default function AnyCity() {
  const {weatherCallAny, display} = useContext(DataContext)
  return (
    <>
      
      <div className="container mx-auto w-1/3 my-2">
        <form onSubmit={weatherCallAny}>
          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlFor="city"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              City
            </label>
            <input type="text" name="city" id="city" className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Whereever the weather?" />
          </div>
          <button className="mt-2 bg-slate-400 hover:bg-yellow-300 hover:text-slate-600 p-1.5 rounded-full" type="submit">Submit</button>
        </form>
      </div>
      <WeatherCard/>
    </>
  );
}
