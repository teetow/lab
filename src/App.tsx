import { Outlet } from "react-router";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <Link to="/lab/">&lt;Back </Link>
      <Outlet />
    </>
  );
}

export default App;
