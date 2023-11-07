import KeyOption from "../../components/board/KeyOption.tsx";
import { Side } from "../../components/board/Side.tsx";
import KeyDisable from "../../components/board/KeyDisable.tsx";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

type PropsAccounts = {
  accounts: string[];
  setBack: Dispatch<SetStateAction<boolean>>;
}

const Accounts = (props: PropsAccounts) => {

  const navigate = useNavigate();
  const { setBack } = props;

  const onClickBack = () => {
    setBack(true);
  };

  return (
    <>
      { props.accounts.length > 0 && props.accounts[0] ? (
        <KeyOption
          keyButton={ "keyButton-01" }
          side={ Side.RIGHT }
          label={ props.accounts[0] }
          onClick={ () => navigate('/withdrawal') }/>) : (
        <KeyDisable keyButton={ "keyButton-01" }></KeyDisable>)
      }
      { props.accounts.length > 1 && props.accounts[1] ? (
        <KeyOption
          keyButton={ "keyButton-02" }
          side={ Side.LEFT }
          label={ props.accounts[1] }
          onClick={ () => navigate('/balance') }/>) : (
        <KeyDisable keyButton={ "keyButton-02" }></KeyDisable>)
      }
      { props.accounts.length > 2 && props.accounts[2] ? (
        <KeyOption
          keyButton={ "keyButton-03" }
          side={ Side.RIGHT }
          label={ props.accounts[2] }
          onClick={ () => navigate('/deposit') }/>) : (
        <KeyDisable keyButton={ "keyButton-03" }></KeyDisable>)
      }
      { props.accounts.length > 3 && props.accounts[3] ? (
        <KeyOption
          keyButton={ "keyButton-04" }
          side={ Side.LEFT }
          label={ props.accounts[3] }
          onClick={ () => navigate('/account-status') }/>) : (
        <KeyDisable keyButton={ "keyButton-04" }></KeyDisable>)
      }
      { props.accounts.length > 4 && props.accounts[4] ? (<KeyOption
        keyButton={ "keyButton-05" }
        side={ Side.RIGHT }
        label={ props.accounts[4] }
        onClick={ () => navigate('/payment-services') }/>) : (
        <KeyDisable keyButton={ "keyButton-05" }></KeyDisable>)
      }
      { props.accounts.length > 5 && props.accounts[5] ? (<KeyOption
        keyButton={ "keyButton-06" }
        side={ Side.RIGHT }
        label={ props.accounts[5] }
        onClick={ () => navigate('/payment-services') }/>) : (
        <KeyDisable keyButton={ "keyButton-06" }></KeyDisable>)
      }
      { props.accounts.length > 5 && props.accounts[5] ? (<KeyOption
        keyButton={ "keyButton-07" }
        side={ Side.RIGHT }
        label={ props.accounts[6] }
        onClick={ () => navigate('/payment-services') }/>) : (
        <KeyDisable keyButton={ "keyButton-07" }></KeyDisable>)
      }
      <KeyOption
        keyButton={ "keyButton-08" }
        side={ Side.LEFT }
        label={ "Regresar" }
        onClick={ () => {
          onClickBack()
        } }/>
    </>
  );
}


export default Accounts;