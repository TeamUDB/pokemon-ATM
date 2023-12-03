import { useNavigate } from "react-router-dom";
import InfoSection from "../../components/board/InfoSection.tsx";
import { useEffect, useState } from "react";
import Amounts from "../../shared/accounts/Amounts.tsx";

const WithdrawalStep02 = () => {

  const [exit, setExit] = useState(false);
  const [goto, setGoto] = useState(false);
  const [amountSelected, setAmountSelected] = useState<string>("");


  const navigate = useNavigate();

  const amounts = ["5", "10", "20", "50", "75", "100", "200"];

  useEffect(() => {
    if (exit) {
      localStorage.removeItem('accountSelected');
      localStorage.removeItem('amountSelected');
      navigate('/main');
    }
    return () => {
      setExit(false);
    }
  }, [exit]);

  useEffect(() => {
    if (goto) {
      navigate('/withdrawal/step-03');
    }
    return () => {
      setGoto(false);
    }
  }, [goto]);

  useEffect(() => {
    if (amountSelected) {
      localStorage.setItem('amountSelected', Number(Number(amountSelected) * -1).toFixed(2));
      setGoto(true);
    }
    return () => {
      setAmountSelected("");
    }
  }, [amountSelected]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className={"w-full h-[100vh] pt-10 board"}>
        {
          <Amounts amountOptions={amounts ? amounts : []} setBack={setExit} setAmountSelected={setAmountSelected}/>
        }
        <InfoSection>
          <div className={"flex flex-col items-center w-full"}>
            <h2 className={"font-light text-4xl"}>Seleccione un monto a retirar</h2>
          </div>
        </InfoSection>
      </div>
    </div>
  );
};

export default WithdrawalStep02;