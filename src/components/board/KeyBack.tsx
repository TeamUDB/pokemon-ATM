import { Side } from "./Side.tsx";
import { Dispatch, SetStateAction } from "react";

type propsKey = {
  keyButton: string;
  label: string;
  side: Side;
  setBack: Dispatch<SetStateAction<boolean>>
}

const KeyOption = (props: propsKey) => (
  <div className={ `${ props.keyButton }` }>
    <div className={ "w-full" } onClick={ () => props.setBack(true) } id={ 'back' }>
      <div className={ `flex items-center justify-center bg-gray-800 h-24 ${ props.side }` }>
        <div className={ "text-center text-white text-4xl" }><strong>{ props.label }</strong></div>
      </div>
    </div>
  </div>
);

export default KeyOption;