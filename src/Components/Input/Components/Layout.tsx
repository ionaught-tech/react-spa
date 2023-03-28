type PropsTypes = {
    error?: string;
    type?: string;
    children: React.ReactNode;
    isBlurred: boolean;
};

const Layout = ({error,type,children,isBlurred}:PropsTypes) => {
  return (
    <div
            className={`input-field-container ${
                error && isBlurred ? "input-field-container-error" : ""
            }`}
        >
            <div
                className={`input-field ${
                    type === "textarea" ? "textarea-field" : ""
                }`}
            >
                {children}
            </div>
            <div className="error-text">{error && isBlurred && error}</div>
        </div>
  )
}

export default Layout