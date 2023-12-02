import InfoSection from "../../components/board/InfoSection.tsx";
import { useEffect, useState } from "react";
import Accounts from "../../shared/accounts/Accounts.tsx";
import { useNavigate } from "react-router-dom";
import { useBalance } from "../../hooks/useBalance.tsx";

const BalanceStep02 = () => {
  const [accountSelected, setAccountSelected] =
    useState<string>(localStorage.getItem('accountSelected') || "");
  const [exit, setExit] = useState(false);
  const navigate = useNavigate();
  const {data, isLoading} = useBalance(2542, accountSelected);

  useEffect(() => {
    console.log(`Estatus => ${ data}`);
  }, [data]);

  useEffect(() => {
    if (exit) {

      localStorage.removeItem('accountSelected');
      navigate('/main');
    }
    return () => {
      setExit(false);
    }
  }, [exit]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className={"w-full h-[100vh] pt-10 board"}>
        <Accounts accounts={[]} setBack={setExit} setAccountSelected={setAccountSelected}/>
        <InfoSection>
          {
            isLoading ? (
              <div className={"flex flex-col items-center w-full"}>
                <h2 className={"font-light text-4xl"}>Consultado...</h2>
              </div>
            ) : (
              <div className={"flex flex-col items-center w-full"}>
                <h2 className={"font-bold text-4xl"}>Cuenta : {accountSelected}</h2>
                <h2 className={"font-light text-4xl"}>Su Saldo es: $ {data}</h2>
              </div>
            )
          }
        </InfoSection>
      </div>
    </div>
  );
};

export default BalanceStep02;