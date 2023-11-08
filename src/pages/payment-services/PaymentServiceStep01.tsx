import { useNavigate } from "react-router-dom";
import InfoSection from "../../components/board/InfoSection.tsx";
import { useEffect, useState } from "react";
import Accounts from "../../shared/accounts/Accounts.tsx";

const PaymentServiceStep01 = () => {

  const [ exit, setExit ] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (exit) {
      navigate('/main');
    }
    return () => {
      setExit(false);
    }
  }, [ exit ]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className={ "w-full h-[100vh] pt-10 board" }>
        <Accounts accounts={ [ "123456789", "987654321" ] } setBack={ setExit }/>
        <InfoSection>
          <div className={ "flex flex-col items-center w-full" }>
            <h2 className={ "font-light text-4xl" }>Seleccione una cuenta</h2>
          </div>
        </InfoSection>
      </div>
    </div>
  );
};

export default PaymentServiceStep01;