import { createContext } from "react";
import appData from "../Data/Default/appData";
import AppData from "../Types/Data/AppData";

const AppContext = createContext<AppData>({state:appData,setState:()=>null});

export default AppContext;