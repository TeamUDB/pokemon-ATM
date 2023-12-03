import { useNavigate } from "react-router-dom";
import InfoSection from "../../components/board/InfoSection.tsx";
import { useEffect, useState } from "react";
import Accounts from "../../shared/accounts/Accounts.tsx";
import { useAccountFind } from "../../hooks/useAccountFind.tsx";

const WithdrawalStep01 = () => {

  const [ exit, setExit ] = useState(false);
  const [ goto, setGoto ] = useState(false);
  const [ accountSelected, setAccountSelected ] = useState<string>("");


  const navigate = useNavigate();

  const { data, error, isLoading } = useAccountFind(2542);

  useEffect(() => {
    if (exit) {
      localStorage.removeItem('accountSelected');
      navigate('/main');
    }
    return () => {
      setExit(false);
    }
  }, [ exit ]);

  useEffect(() => {
    if (goto) {
      navigate('/withdrawal/step-02');
    }
    return () => {
      setGoto(false);
    }
  }, [ goto ]);

  useEffect(() => {
    if (accountSelected) {
      localStorage.setItem('accountSelected', accountSelected);
      setGoto(true);
    }
    return () => {
      setAccountSelected("");
    }
  }, [ accountSelected ]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className={ "w-full h-[100vh] pt-10 board" }>
        {
          isLoading ? (
            <div className={ "flex flex-col items-center w-full" }>
              <h2 className={ "font-light text-4xl" }>Cargando...</h2>
            </div>
          ) : (
            <Accounts accounts={ data ? data : [] } setBack={ setExit } setAccountSelected={ setAccountSelected }/>
          )
        }
        {
          error ? (
            <div className={ "flex flex-col items-center w-full" }>
              <h2 className={ "font-light text-4xl" }>Error al cargar las cuentas</h2>
            </div>
          ) : (
            <></>
          )
        }

        <InfoSection>
          <div className={ "flex flex-col items-center w-full" }>
            <h2 className={ "font-light text-4xl" }>Seleccione una cuenta</h2>
          </div>
        </InfoSection>
      </div>
    </div>
  );
};

export default WithdrawalStep01;