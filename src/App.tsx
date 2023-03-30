import AppContext from "./Contexts/AppContext";
import useApp from "./Hooks/useApp";
import Router from "./Routes";
import "./Styles/index.css";
import "./Styles/layout.css"
import "./Styles/forms.css"

const App = ()=>{

  const appState = useApp();

  return (
    <AppContext.Provider value={appState}>
      <Router/>
    </AppContext.Provider>
  );
}

export default App;
