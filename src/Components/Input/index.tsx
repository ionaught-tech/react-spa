import { useEffect, useState } from "react";
import { InputFieldType } from "../../Types/PropsTypes";
import Label from "../Input/Components/Label";
import Layout from "../Input/Components/Layout";

type PropsTypes = {
  type?: InputFieldType;
  arrow?: string;
  leftIcon?:string;
  label?: string;
  icon?: string;
  error?: string;
  info?: string;
  value?: string;
  disabled?: boolean;
  onChange: (value: string, e: any) => void;
  submitted?: boolean;
};

const InputField = ({
  type = "text",
  label,
  error,
  value,
  onChange,
  disabled = false,
  submitted = false,
}: PropsTypes) => {
  const [isBlurred, setIsBlurred] = useState<boolean>(false);

  useEffect(() => {
    setIsBlurred(submitted);
  }, [submitted]);

  const onBlur = () => {
    setIsBlurred(true);
  };

  return (
    <Layout error={error} isBlurred={isBlurred} type={type}>
      <Label label={label} type={type} value={value} />
      {type === "textarea" ? (
        <textarea
          title={label}
          value={value}
          onChange={(e) => onChange(e.target.value, e)}
          disabled={disabled}
          onBlur={onBlur}
        />

      ) : (
        <input
          type={type}
          title={label}
          value={value}
          onChange={(e) => onChange(e.target.value, e)}
          disabled={disabled}
          onBlur={onBlur}
        />
      )}
    </Layout>
  );
};

export default InputField;
