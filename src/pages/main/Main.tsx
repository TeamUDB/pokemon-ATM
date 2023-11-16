import { useNavigate } from "react-router-dom";
import { Side } from "../../components/board/Side.tsx";
import KeyDisable from "../../components/board/KeyDisable.tsx";
import InfoSection from "../../components/board/InfoSection.tsx";
import KeyNavigate from "../../components/board/KeyNavigate.tsx";

const Main = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className={ "w-full h-[100vh] pt-10 board" }>
        <KeyNavigate
          keyButton={ "keyButton-01" }
          side={ Side.RIGHT }
          label={ "Retiro" }
          onClick={ () => navigate('/withdrawal') }/>
        <KeyNavigate
          keyButton={ "keyButton-02" }
          side={ Side.LEFT }
          label={ "Consulta de saldo" }
          onClick={ () => navigate('/balance') }/>
        <KeyNavigate
          keyButton={ "keyButton-03" }
          side={ Side.RIGHT }
          label={ "Deposito" }
          onClick={ () => navigate('/deposit') }/>
        <KeyNavigate
          keyButton={ "keyButton-04" }
          side={ Side.LEFT }
          label={ "Estado de cuenta" }
          onClick={ () => navigate('/account-status') }/>
        <KeyNavigate
          keyButton={ "keyButton-05" }
          side={ Side.RIGHT }
          label={ "Pago de servicios" }
          onClick={ () => navigate('/payment-services') }/>
        <KeyDisable keyButton={ "keyButton-06" }></KeyDisable>
        <KeyDisable keyButton={ "keyButton-07" }></KeyDisable>
        <KeyNavigate
          keyButton={ "keyButton-08" }
          side={ Side.LEFT }
          label={ "Salir" }
          onClick={ () => navigate('/login') }/>
        <InfoSection>
          <div className={ "flex flex-col items-center w-full" }>
            <h2 className={ "font-bold text-4xl" }>Bienvenido</h2>
            <h3 className={ "font-light text-4xl pt-3" }>Victor Hugo Cornejo Calderon</h3>
          </div>
        </InfoSection>
      </div>
    </>
  )
}
export default Main;