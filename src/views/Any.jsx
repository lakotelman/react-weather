import AddCity from "../components/AddCity";
import { DefaultLayout } from "../layouts/Default";

function Any() {
  return (
    <>
    <h1 className="text-2xl mt-4"> View Any City</h1>
      <AddCity/>
    </>
  );
}

export default function Page() {
  return DefaultLayout({ children: Any() });
}
