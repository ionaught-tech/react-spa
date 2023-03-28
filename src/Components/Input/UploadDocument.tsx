import IconAndInfo from "./Components/IconAndInfo";
import Label from "./Components/Label";
import Layout from "./Components/Layout";
import { useRef } from "react";
type PropsTypes = {
    label?: string;
    icon?: string;
    error?: string;
    info?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (value: string, e: any) => void;
    blurred?: boolean;
};

const UploadDocument = ({error,label,icon,blurred=false}:PropsTypes) => {
    const fileRef = useRef<HTMLInputElement>(null);
    
  return (
      <Layout
        error={error}
        isBlurred={blurred}
      >
          <div className="upload-field">
              <input
                type="file"
                ref={fileRef}
                />
              <div
                className="upload-button"
                onClick={() => fileRef.current?.click()}
                >
                Browse
                
              </div>
          </div>
          <Label
                label={(fileRef.current &&
                     fileRef.current?.files &&
                     fileRef.current?.files[0]?.name)
                     || label}
            />
            <IconAndInfo
                icon={icon}
            />
      </Layout>
  )
}

export default UploadDocument