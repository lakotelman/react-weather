import WeatherCard from "../components/WeatherCard";
import { DefaultLayout } from "../layouts/Default";

function SingleCity() { 
    return (
        <>
        <WeatherCard/>
        </>
    )
}

export default function Page() {
    return DefaultLayout({ children: SingleCity() });
  }