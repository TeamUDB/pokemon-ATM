import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import logo from "../../assets/logo.jpg";

type propsInfoSection = {
  children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

const InfoSection = (props: propsInfoSection) => (
  <div className={"info-section"}>
    <div className={"flex justify-center items-center"}>
      <img src={logo} width={'40%'} alt={"POKEMON BANK"}/>
    </div>
    {props.children}
  </div>
);

export default InfoSection;