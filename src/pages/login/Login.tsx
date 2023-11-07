import { useEffect, useState } from "react";
import InputForm from "../../components/forms/input/InputForm.tsx";

const Login = () => {

  const [pin, setPin] = useState<string>('');

  const handlePin = (pinInput: string) => {
    setPin(pinInput)
  }

  useEffect(() => {
    if (pin.length === 4) {
      console.log('PIN COMPLETO')
    }
  }, [pin])

  return (
    <>
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Pokemon Bank</h1>
            <div>
              <InputForm label={"PIN"} placeholder={"Ingrese su PIN"} type={"password"} name={"pin"}
                         onChange={handlePin}/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;