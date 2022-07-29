import Navbar from "../components/Navbar";

export function DefaultLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}
