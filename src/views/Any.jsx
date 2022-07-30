import AnyCity from "../components/AnyCity";
import { DefaultLayout } from "../layouts/Default";

function Any() {
  return (
    <>
    <h1 className="text-2xl mt-4"> View Any City</h1>
      <AnyCity/>
    </>
  );
}

export default function Page() {
  return DefaultLayout({ children: Any() });
}
