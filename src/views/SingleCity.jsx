import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import { DataContext } from "../contexts/DataProvider";
import { DefaultLayout } from "../layouts/Default";

function SingleCity() { 
    const {city} = useParams()
    const { dest, setDest} = useState({})
    const {weatherCallSaved} = useContext(DataContext)

    useEffect(() =>{
        weatherCallSaved(city)
    }, [city])

    return (
        <>
        <WeatherCard/>
        </>
    )
}

export default function Page() {
    return DefaultLayout({ children: SingleCity() });
  }