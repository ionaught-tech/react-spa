import useFetch from "../../Hooks/useFetch";
import { ErrorPropsTypes, ViewPropsTypes } from "../../Types/PropsTypes";
import EmptyPlaceholder from "../EmptyPlaceholder";
import Error from "../Error";
import Loading from "../Loading";


interface PropsTypes{
    url:string;
    view: (p:ViewPropsTypes)=>JSX.Element;
    LoadingScreen?: ()=>JSX.Element;
    Placeholder?: ()=>JSX.Element;
    errorView?: (p:ErrorPropsTypes)=>JSX.Element
    isList?: boolean;
}

const DataViewer = ({
    url,
    view,
    LoadingScreen = Loading,
    Placeholder = EmptyPlaceholder,
    errorView = ({error,reload})=><Error error={error} reload={reload} />,
    isList=true
}: PropsTypes) => {
  
    const {data,error,loading,reload,setData} = useFetch<any>(url);
  
    if(loading) return <LoadingScreen/>
  
    if(error) return errorView({error,reload,setData})
    
    if(!data?.length && isList) return <Placeholder/>

    return view({data,setData,reload})

}

export default DataViewer