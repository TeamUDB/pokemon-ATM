import { useEffect, useState } from "react";
import InputForm from "../../components/forms/input/InputForm.tsx";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [pin, setPin] = useState<string>('');
  const navigate = useNavigate();

  const handlePin = (pinInput: string) => {
    setPin(pinInput)
  }

  useEffect(() => {
    if (pin.length === 4) {
      if (pin === '2542') {
        localStorage.setItem('pin', pin);
        navigate('/main');
      } else {
        alert('PIN incorrecto')
      }
    }
  }, [pin])

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3 flex flex-col justify-center items-center">
          <img src={logo} width={'40%'} alt={"POKEMON BANK"}/>
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <div>
              <InputForm label={""} placeholder={"Ingrese su PIN"} type={"password"} name={"pin"}
                         onChange={handlePin}/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;