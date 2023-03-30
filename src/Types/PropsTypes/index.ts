
import {Dispatch,SetStateAction} from "react";

export interface DefaultError {
    message:string
}

export interface ViewPropsTypes {
    data: any;
    reload?: ()=>void
    setData:Dispatch<SetStateAction<any | null>>
}

export interface ErrorPropsTypes {
    error: DefaultError;
    reload: ()=>void
    setData:Dispatch<SetStateAction<any | null>>
}

export type InputFieldType = "text" | "number" | "password" | "submit" | "button" | "textarea";