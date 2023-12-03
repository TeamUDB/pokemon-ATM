import { useNavigate } from "react-router-dom";
import InfoSection from "../../components/board/InfoSection.tsx";
import { useEffect, useState } from "react";
import KeyDisable from "../../components/board/KeyDisable.tsx";
import KeyBack from "../../components/board/KeyBack.tsx";
import { Side } from "../../components/board/Side.tsx";
import { addDeposit } from "../../services/accouts.services.tsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { DepositTemplate } from "./DepositTemplate.tsx";

const DepositStep03 = () => {

  const [exit, setExit] = useState(false);
  const [accountSelected, ] =
    useState<string>(localStorage.getItem('accountSelected') || "");
  const [amountSelected, ] =
    useState<string>(localStorage.getItem('amountSelected') || "");
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const execute = async () => {
    const ok = await addDeposit(2542, accountSelected, {
      id: 0,
      amount: Number(amountSelected),
      concept: "Deposito de efectivo",
      type: "deposit",
      date: new Date().toLocaleDateString(),
    });
    console.log(ok);
    setSuccess(ok);
  }

  useEffect(() => {
    execute().then();
  }, [amountSelected, accountSelected]);

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
                <PDFDownloadLink document={<DepositTemplate/>} fileName="deposito.pdf">
                  {({loading}) =>
                    loading ? "Loading document..." : "Comprobante"
                  }
                </PDFDownloadLink>
              </div>
            </div>
          </div>
        </div>
        <KeyDisable keyButton={"keyButton-05"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-06"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-07"}></KeyDisable>
        <KeyBack setBack={setExit} label={"Regresar"} side={Side.LEFT}
                 keyButton={"keyButton-08"}></KeyBack>)
        <InfoSection>
          <div className={"flex flex-col items-center w-full"}>
            {
              success ? (
                <>
                  <h2 className={"font-bold text-4xl"}>Transaccion Exitosa</h2>
                  <h2 className={"font-light text-4xl"}>No olvide su comprobante</h2>
                </>
              ) : (
                <>
                  <h2 className={"font-bold text-4xl"}>Saldo insuficiente</h2>
                  <h2 className={"font-light text-4xl"}>No se pudo realizar la transaccion</h2>
                </>
              )
            }

          </div>
        </InfoSection>
      </div>
    </div>
  );
};

export default DepositStep03;