import { useState } from "react";
import appData from "../Data/Default/appData";
import AppData from "../Types/Data/AppData";

const useApp:()=>AppData = ()=>{
    const [state,setState] = useState(appData);

    return {state,setState}
}

export default useApp;