import CityCard from "./CityCard";

export default function CityList() {
  return (
    <>
      <div className="container mx-auto pt-6">
        <h1 className="text-3xl">My Cities</h1>
        <div className="w-2/3 mx-auto mt-6 grid md:grid-cols-3 justify-items-center gap-3">
          <CityCard /> <CityCard /> <CityCard />
        </div>
      </div>
    </>
  );
}
