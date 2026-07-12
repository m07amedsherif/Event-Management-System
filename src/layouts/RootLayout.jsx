import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/requests">Requests</Link> |{" "}
        <Link to="/registerations">Registerations</Link> |{" "}
        <Link to="/favourites">Favourites</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Outlet />
    </>
  );
}