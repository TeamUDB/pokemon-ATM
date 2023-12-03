import InfoSection from "../../components/board/InfoSection.tsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBalance } from "../../hooks/useBalance.tsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { AccountStatusTemplate } from "./AccountStatusTemplate.tsx";
import KeyDisable from "../../components/board/KeyDisable.tsx";
import KeyBack from "../../components/board/KeyBack.tsx";
import { Side } from "../../components/board/Side.tsx";
import { useTransactions } from "../../hooks/useTransactions.tsx";


const AccountStatusStep02 = () => {
  const [accountSelected,] = useState<string>(localStorage.getItem('accountSelected') || "");
  const [exit, setExit] = useState(false);
  const navigate = useNavigate();
  const {data, isLoading} = useBalance(2542, accountSelected);
  const transactions = useTransactions(2542, accountSelected);

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
        <KeyDisable keyButton={"keyButton-01"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-02"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-03"}></KeyDisable>
        <div className={"keyButton-04"}>
          <div className={"w-full"} id={"Imprimir"}>
            <div className={`flex items-center justify-center bg-gray-800 h-24 rounded-l-lg`}>
              <div className={"text-center text-white text-4xl"}>
                <PDFDownloadLink document={<AccountStatusTemplate records={transactions.data}/>} fileName="account-status.pdf">
                  {({loading}) =>
                    loading ? "Loading document..." : "Imprimir"
                  }
                </PDFDownloadLink>
              </div>
            </div>
          </div>
        </div>
        <KeyDisable keyButton={"keyButton-05"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-06"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-07"}></KeyDisable>
        <KeyBack setBack={ setExit } label={ "Regresar" } side={ Side.LEFT }
                 keyButton={ "keyButton-08" }></KeyBack>)
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

export default AccountStatusStep02;