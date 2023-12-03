type propsKey = {
  keyButton: string;
}

const KeyDisable = (props: propsKey) => (
  <div className={props.keyButton}>
    <div></div>
  </div>

);

export default KeyDisable;