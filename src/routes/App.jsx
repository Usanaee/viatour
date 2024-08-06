import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserNavbar from "../components/UserNavbar";
import Fotter from "../components/Fotter";
function App() {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <UserNavbar toggle={toggle} open={open} />
      <main>
        <Outlet/>
      </main>
      <Fotter />
    </>
  );
}

export default App;
