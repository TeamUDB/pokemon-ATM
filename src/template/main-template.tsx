import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainTemplate = () => {
  const pin = localStorage.getItem('pin');
  const navigate = useNavigate();

  useEffect(() => {
    if (!pin) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Outlet/>
    </div>
  )
};

export default MainTemplate;