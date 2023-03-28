import { Dispatch, SetStateAction,  useRef, useState,useEffect } from "react";
import getCall from "../Services/getCall";
import { DefaultError } from "../Types/PropsTypes";

interface ReturnType <D,E>{
    loading: boolean;
    error:E | null | DefaultError;
    reload: () => void;
    data:D | null;
    setData:Dispatch<SetStateAction<D |null>>
}

interface UseFetchOptions {
    reloadOnError?: "expTime" ;
    load?:boolean
}

const useFetch = <D,E=void>(url:string,option?:UseFetchOptions): ReturnType<D,E> =>{
    const [data, setData] = useState<D | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<E | DefaultError | null>(null);
    const [recall, setRecall] = useState(false);
    const [recallScale,setRecallScale] = useState(1);
    const signalRef = useRef<boolean>();
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(()=>{
        signalRef.current = true;
        fetchData();
        return()=>{
            clearTimeout(timerRef.current);
            signalRef.current = false;
        }
    },[recall,url])

    const fetchData = async () => {
        clearTimeout(timerRef.current);
        setLoading(true)
        try{
            const response = await getCall(url);
            if(!signalRef.current) return;           
            if(response.status){
                setError(null)
                setData(response.data);
            }else{
                onError({message: response.data});
            }
        }catch(e){
            if(!signalRef.current) return;
            onError({message:"Failed to connect to the Server"});
        }
        setLoading(false);
    }

    const onError = (error:E | DefaultError)=>{
        if(option?.reloadOnError === "expTime"){
            timerRef.current = setTimeout(()=>{
                if((!data || loading) && signalRef.current)reload()          
            },5000 * recallScale
            )
            setRecallScale(prev=>prev*2)
        }
        setError(error);
    }

    const reload = () => setRecall(prev=>!prev)

    return {data, loading, error, reload,setData};
}

export default useFetch