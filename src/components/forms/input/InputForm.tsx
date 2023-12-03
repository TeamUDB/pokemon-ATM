type propTypes = {
  label: string,
  placeholder: string,
  type: string,
  name: string,
  onChange: (pinInput: string) => void
}

const InputForm = (props: propTypes) => {
  return (
    <>
      <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="username">
        {props.label}
      </label>
      <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
             onChange={(e) => props.onChange(e.target.value)}
             type={props.type}
             name={props.name}
             id={props.name}
             placeholder={props.placeholder}/>
    </>
  );
}

export default InputForm;