type PropsTypes = {
    arrow?: string;
    isLine?:boolean;
    leftIcon?:string;
    
};

const ArrowIcon = ({arrow,isLine=false,leftIcon}:PropsTypes) => {
  return (
    <div>
        {leftIcon &&  <div
                className="input-field-arrow"
                style={{
                    backgroundImage: `url(${leftIcon})`,
                }}
            ></div> }
        {arrow && (
            
        <div>
            {isLine && <div className="arrow-right-line"></div>}
            <div
                className="input-field-arrow"
                style={{
                    backgroundImage: `url(${arrow})`,
                }}
            ></div>
            </div>
        )}
    </div>
  )
}

export default ArrowIcon