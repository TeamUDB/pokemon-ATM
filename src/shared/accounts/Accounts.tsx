import KeyOption from "../../components/board/KeyOption.tsx";
import { Side } from "../../components/board/Side.tsx";
import KeyDisable from "../../components/board/KeyDisable.tsx";
import { Dispatch, SetStateAction } from "react";
import { AccountInfo } from "../../services/accouts.services.tsx";
import KeyBack from "../../components/board/KeyBack.tsx";

type PropsAccounts = {
  accounts: AccountInfo[];
  setBack: Dispatch<SetStateAction<boolean>>;
  setAccountSelected: Dispatch<SetStateAction<string>>;
}

const Accounts = (props: PropsAccounts) => {

  return (
    <>
      { props.accounts.length > 0 && props.accounts[0] ? (
        <KeyOption
          keyButton={ "keyButton-01" }
          side={ Side.RIGHT }
          value={ props.accounts[0].accountNumber }
          label={ props.accounts[0].accountNumber }
          accountSelected={ props.setAccountSelected }/>) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.accounts.length > 1 && props.accounts[1] ? (
        <KeyOption
          keyButton={ "keyButton-02" }
          side={ Side.LEFT }
          value={ props.accounts[1].accountNumber }
          accountSelected={ props.setAccountSelected }
          label={ props.accounts[1].accountNumber }
        />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.accounts.length > 2 && props.accounts[2] ? (
        <KeyOption
          keyButton={ "keyButton-03" }
          side={ Side.RIGHT }
          value={ props.accounts[2].accountNumber }
          accountSelected={ props.setAccountSelected }
          label={ props.accounts[2].accountNumber }
        />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.accounts.length > 3 && props.accounts[3] ? (
        <KeyOption
          keyButton={ "keyButton-04" }
          side={ Side.LEFT }
          value={ props.accounts[3].accountNumber }
          accountSelected={ props.setAccountSelected }
          label={ props.accounts[3].accountNumber }
        />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.accounts.length > 4 && props.accounts[4] ? (<KeyOption
        keyButton={ "keyButton-05" }
        side={ Side.RIGHT }
        value={ props.accounts[4].accountNumber }
        accountSelected={ props.setAccountSelected }
        label={ props.accounts[4].accountNumber }
      />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.accounts.length > 5 && props.accounts[5] ? (<KeyOption
        keyButton={ "keyButton-06" }
        side={ Side.RIGHT }
        value={ props.accounts[5].accountNumber }
        accountSelected={ props.setAccountSelected }
        label={ props.accounts[5].accountNumber }
      />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.accounts.length > 6 && props.accounts[6] ? (<KeyOption
        keyButton={ "keyButton-07" }
        side={ Side.RIGHT }
        value={ props.accounts[6].accountNumber }
        accountSelected={ props.setAccountSelected }
        label={ props.accounts[6].accountNumber }
      />) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }

      <KeyBack setBack={ props.setBack } label={ "Regresar" } side={ Side.LEFT }
               keyButton={ "keyButton-08" }></KeyBack>)
    </>
  );
}


export default Accounts;