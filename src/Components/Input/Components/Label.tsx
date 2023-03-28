type PropsTypes = {
    type?: string;
    value?: string;
    label?: string;
};
const Label = ({type,value,label}:PropsTypes) => {
  return (
    <label
        className={
            (type === "textarea" ? "text-area-label " : "") +
            (value ? "filled-label" : "")
        }
    >
        {label}
    </label>
  )
}

export default Label