import { DefaultLayout } from "../layouts/Default";
import CityList from "../components/CityList";
import AddFavorite from "../components/AddFavorite";
function Cities() {
  return (
    <>
      <h1 className="text-2xl mt-4"> Add a City</h1>
      <AddFavorite />
      <CityList />
    </>
  );
}

export default function Page() {
  return DefaultLayout({ children: Cities() });
}
