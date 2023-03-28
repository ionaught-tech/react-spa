
export type PropsTypes = {
    placeholder: string;
    value: string;
    option: string;
    onChange: (value:string) => void;
}


const CheckBox = ({placeholder,option,value,onChange}:PropsTypes) => {
  return (
    <div
        onClick={() => {
            if(value !== option){
                onChange(option)
            }else{
                onChange("")
            }
        }}>
        <input
            placeholder={placeholder}
            type="checkbox"
            value={option}
            checked={
                value === option
            }
            onChange={() => {}}
        />
        <label >{placeholder}</label>
    </div>
  )
}

export default CheckBox