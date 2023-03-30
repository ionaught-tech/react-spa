type ButtonType = 'Primary' | 'Secondary' | 'Inline';

interface PropsTypes {
  label: String;
  type?: ButtonType;
  onClick?: () => void;
  action?: 'submit' | 'button';
  disabled?: boolean;
  loading?: boolean;
}

const getClassName = (type:ButtonType)=> {
  const classNamesList = {
    Primary: "primary-button",
    Secondary: "secondary-button",
    Inline: "inline-button"
  }
  return classNamesList[type] || "";
}

const Button = ({
  label,
  type = 'Primary',
  onClick,
  action = 'button',
  disabled = false,
  loading = false,
}: PropsTypes) => {

  return (
    <button
      className={getClassName(type)}
      onClick={() => !loading && onClick?.()}
      type={action}
      disabled={loading || disabled}
    >
      {label}
    </button>
  );
};

export default Button;
