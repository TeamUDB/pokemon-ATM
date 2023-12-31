import { Side } from "./Side.tsx";

type propsKey = {
  keyButton: string;
  label: string;
  side: Side;
  onClick: () => void
}

const KeyNavigate = (props: propsKey) => (
  <div className={`${props.keyButton}`}>
    <button className={"w-full"} onClick={props.onClick}>
      <div className={`flex items-center justify-center bg-gray-800 h-24 ${props.side}`}>
        <div className={"text-center text-white text-4xl"}><strong>{props.label}</strong></div>
      </div>
    </button>
  </div>
);

export default KeyNavigate;