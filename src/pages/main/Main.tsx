import { useNavigate } from "react-router-dom";
import KeyOption from "../../components/board/KeyOption.tsx";
import { Side } from "../../components/board/Side.tsx";
import KeyDisable from "../../components/board/KeyDisable.tsx";
import InfoSection from "../../components/board/InfoSection.tsx";

const Main = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className={ "w-full h-[100vh] pt-10 board" }>
        <KeyOption
          keyButton={ "keyButton-01" }
          side={ Side.RIGHT }
          label={ "Retiro" }
          onClick={ () => navigate('/accounts') }/>
        <KeyOption
          keyButton={ "keyButton-02" }
          side={ Side.LEFT }
          label={ "Consulta" }
          onClick={ () => navigate('/balance') }/>
        <KeyOption
          keyButton={ "keyButton-03" }
          side={ Side.RIGHT }
          label={ "Deposito" }
          onClick={ () => navigate('/deposit') }/>
        <KeyOption
          keyButton={ "keyButton-04" }
          side={ Side.LEFT }
          label={ "Estado de cuenta" }
          onClick={ () => navigate('/account-status') }/>
        <KeyOption
          keyButton={ "keyButton-05" }
          side={ Side.RIGHT }
          label={ "Pago de servicios" }
          onClick={ () => navigate('/payment-services') }/>
        <KeyDisable keyButton={ "keyButton-06" }></KeyDisable>
        <KeyDisable keyButton={ "keyButton-07" }></KeyDisable>
        <KeyOption
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