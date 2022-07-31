import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"
export default function WeatherCard() { 
  const {display} = useContext(DataContext)
  
    return (
        <div
        id="appbox"
        className="mt-6 mx-auto bg-slate-300 w-96 h-[650px] shadow-lg rounded-3xl p-6 mb-4 space-y-8 items-center flex flex-col justify-center border-4 border-yellow-400"
      >
        <div
          id="locaton-temp-forecast"
          className="flex flex-col gap-4 justfify-center items-center"
        >
          <p className="text-center text-2xl" id="location">{display.city}</p>
          <div
            className="font-bold text-gray-700 bg-white flex items-center justify-center font-mono rounded-full h-32 w-32"
          >
            <p className="text-6xl font-sans" id="temp">{display.temperature}</p>
          </div>
          <div className="w-[100px] h-[100px]" id="icon">
            <img src={display.icon} />
          </div>
          <div id="forecast">{display.forecast}</div>
        </div>
        <div className="flex space-x-3" id="hi-lo-humid">
          <div
            className="text-white flex flex-col items-center justify-center bg-slate-600 w-24 h-24 rounded-xl"
          >
            <p>High</p>
            <hr />
            <p>{display.high}</p>
          </div>
          <div
            className="text-white flex flex-col items-center justify-center bg-slate-700 w-24 h-24 rounded-xl"
          >
            <p>Low</p>
            <hr />
            <p>{display.low}</p>
          </div>
          <div
            className="text-white flex flex-col items-center justify-center bg-slate-800 w-24 h-24 rounded-xl"
          >
            <p>Humidity</p>
            <hr />
            <p>{display.humidity}</p>
          </div>
        </div>
      </div>
    )
}