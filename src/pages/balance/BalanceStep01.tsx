import KeyOption from "../../components/board/KeyOption.tsx";
import { Side } from "../../components/board/Side.tsx";
import KeyDisable from "../../components/board/KeyDisable.tsx";
import { useNavigate } from "react-router-dom";
import InfoSection from "../../components/board/InfoSection.tsx";

const BalanceStep01 = () => {

  const navigate = useNavigate();

  const handleSelectAccount = (account: string) => {
    console.log("handleSelectAccount => ", account);
  }

  const handleBack = () => {
    navigate('/main')
  }

  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center pt-10">
      <div className={"w-full h-full board"}>
        <KeyOption
          key={"keyButton-01"}
          side={Side.RIGHT}
          label={"XXXXXX1234-1"}
          onClick={() => handleSelectAccount}/>
        <KeyDisable keyButton={"keyButton-02"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-03"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-04"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-05"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-06"}></KeyDisable>
        <KeyDisable keyButton={"keyButton-07"}></KeyDisable>
        <KeyOption
          key={"keyButton-08"}
          side={Side.LEFT}
          label={"Regresar"}
          onClick={handleBack}/>
        <InfoSection>
          <div className={"flex flex-col items-center h-full w-full"}>
            <h2 className={"font-light text-4xl pt-20"}>Estimado cliente</h2>
            <h2 className={"font-light text-4xl pt-3"}>Victor Hugo Cornejo Calderon</h2>
            <p className={"text-2xl pt-20"}>Seleccione una cuenta</p>
          </div>
        </InfoSection>
      </div>
    </div>
  );
};

export default BalanceStep01;