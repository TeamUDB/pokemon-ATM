import InfoSection from "../../components/board/InfoSection.tsx";
import { useEffect, useState } from "react";
import Accounts from "../../shared/accounts/Accounts.tsx";
import { useNavigate } from "react-router-dom";

const BalanceStep02 = () => {
  const [ exit, setExit ] = useState(false);
  const [ , setAccountSelected ] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (exit) {
      localStorage.removeItem('accountSelected');
      navigate('/main');
    }
    return () => {
      setExit(false);
    }
  }, [ exit ]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className={ "w-full h-[100vh] pt-10 board" }>
        <Accounts accounts={ [] } setBack={ setExit } setAccountSelected={ setAccountSelected }/>
        <InfoSection>
          <div className={ "flex flex-col items-center w-full" }>
            <h2 className={ "font-light text-4xl" }>Su Saldo es: $ 1000.00</h2>
          </div>
        </InfoSection>
      </div>
    </div>
  );
};

export default BalanceStep02;