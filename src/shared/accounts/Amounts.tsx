import KeyOption from "../../components/board/KeyOption.tsx";
import { Side } from "../../components/board/Side.tsx";
import KeyDisable from "../../components/board/KeyDisable.tsx";
import { Dispatch, SetStateAction } from "react";
import KeyBack from "../../components/board/KeyBack.tsx";

type PropsAccounts = {
  amountOptions: string[];
  setBack: Dispatch<SetStateAction<boolean>>;
  setAmountSelected: Dispatch<SetStateAction<string>>;
}

const Amounts = (props: PropsAccounts) => {

  return (
    <>
      { props.amountOptions.length > 0 && props.amountOptions[0] ? (
        <KeyOption
          keyButton={ "keyButton-01" }
          side={ Side.RIGHT }
          value={ props.amountOptions[0] }
          label={ props.amountOptions[0] }
          accountSelected={ props.setAmountSelected }/>) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.amountOptions.length > 1 && props.amountOptions[1] ? (
        <KeyOption
          keyButton={ "keyButton-02" }
          side={ Side.LEFT }
          value={ props.amountOptions[1] }
          accountSelected={ props.setAmountSelected }
          label={ props.amountOptions[1] }
        />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.amountOptions.length > 2 && props.amountOptions[2] ? (
        <KeyOption
          keyButton={ "keyButton-03" }
          side={ Side.RIGHT }
          value={ props.amountOptions[2] }
          accountSelected={ props.setAmountSelected }
          label={ props.amountOptions[2] }
        />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.amountOptions.length > 3 && props.amountOptions[3] ? (
        <KeyOption
          keyButton={ "keyButton-04" }
          side={ Side.LEFT }
          value={ props.amountOptions[3] }
          accountSelected={ props.setAmountSelected }
          label={ props.amountOptions[3] }
        />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.amountOptions.length > 4 && props.amountOptions[4] ? (<KeyOption
        keyButton={ "keyButton-05" }
        side={ Side.RIGHT }
        value={ props.amountOptions[4] }
        accountSelected={ props.setAmountSelected }
        label={ props.amountOptions[4] }
      />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.amountOptions.length > 5 && props.amountOptions[5] ? (<KeyOption
        keyButton={ "keyButton-06" }
        side={ Side.RIGHT }
        value={ props.amountOptions[5] }
        accountSelected={ props.setAmountSelected }
        label={ props.amountOptions[5] }
      />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.amountOptions.length > 6 && props.amountOptions[6] ? (<KeyOption
        keyButton={ "keyButton-07" }
        side={ Side.RIGHT }
        value={ props.amountOptions[6] }
        accountSelected={ props.setAmountSelected }
        label={ props.amountOptions[6] }
      />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }

      <KeyBack setBack={ props.setBack } label={ "Regresar" } side={ Side.LEFT }
               keyButton={ "keyButton-08" }></KeyBack>)
    </>
  );
}


export default Amounts;