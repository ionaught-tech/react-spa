import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

const useAppContext = () => {
    const value = useContext(AppContext);

    return value;
}

export default useAppContext