import {Dispatch,SetStateAction} from "react";

type Data = {
    name:string;
    age: number;
}

interface PropsTypes {
    data: Data[];
    reload?: ()=>void
    setData:Dispatch<SetStateAction<Data[] | null>>
}

const View = ({data}:PropsTypes) => {
  return (
    <div>{
        data.map(({name,age},i)=>
        <div key={i}>
            <span>
            Name: {name} |{" "}
            </span>
            <span>
            Age: {age}
            </span>
        </div>
        )}
    </div>
  )
}

export default View