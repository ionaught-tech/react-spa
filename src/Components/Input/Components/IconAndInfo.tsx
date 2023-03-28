type PropsTypes = {
    icon?: string;
    info?: string;
};

const IconAndInfo = ({icon,info}:PropsTypes) => {
  return (
    <>
        {icon && (
            <div
                className="input-field-icon"
                style={{
                    backgroundImage: `url(${icon})`,
                }}
            ></div>
        )}
        {info && (
            <div className="input-field-info-icon" title={info}></div>
        )}
    </>
  )
}

export default IconAndInfo