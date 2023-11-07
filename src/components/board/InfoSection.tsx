import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

type propsInfoSection = {
  children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

const InfoSection = (props: propsInfoSection) => (
  <div className={"info-section"}>
    <div className={"flex justify-center items-center pt-10"}>
      <h1 className={"font-bold text-6xl"}>Pokemon Bank</h1>
    </div>

    {props.children}
  </div>
);

export default InfoSection;