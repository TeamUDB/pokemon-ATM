type propsKey = {
  key: string;
}

const KeyDisable = (props: propsKey) => (
  <div className={props.key}>
    <div></div>
  </div>

);

export default KeyDisable;