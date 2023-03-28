import { DefaultError } from "../../Types/PropsTypes"

interface PropsTypes{
  error: DefaultError;
  reload: ()=>void | undefined
}

const Error = ({error,reload}:PropsTypes) => {
  return (
    <div>
      <div>
        {error.message}
      </div>
      <button
        onClick={reload}
        role="reload-button"
      >
        Reload
      </button>
    </div>
  )
}

export default Error