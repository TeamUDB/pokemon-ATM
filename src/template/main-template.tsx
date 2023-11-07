import { Outlet } from "react-router-dom";

const MainTemplate = () => (
  <div className="min-h-screen flex justify-center items-center">
    <Outlet/>
  </div>
);

export default MainTemplate;