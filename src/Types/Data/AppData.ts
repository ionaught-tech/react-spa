import { Dispatch, SetStateAction } from "react";

export type AppState = {
    name: string;
}

interface AppData {
    state: AppState;
    setState: Dispatch<SetStateAction<AppState>>;
}

export default AppData;