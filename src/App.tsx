import Input from "./components/Input";
import { Provider } from "./context";
import { useContexto } from "./hooks";

function Principal() {
  const { red, green, blue, setRed, setGreen, setBlue} = useContexto()

  return (
    <div>
      <Input contento={red} setContexto={setRed}/>
      <Input contento={green} setContexto={setGreen}/>
      <Input contento={blue} setContexto={setBlue}/>
    </div>
  );
}

function App(){
  return(
    <Provider>
      <Principal/>
    </Provider>
  )
} 
export default App;
