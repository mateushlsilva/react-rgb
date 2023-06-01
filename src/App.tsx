import Input from "./components/Input";
import { Provider } from "./context";
import { useContexto } from "./hooks";

function Principal() {
  const { red, green, blue, setRed, setGreen, setBlue} = useContexto()

  return (
    <div>
      <Input titulo={'red'} contento={red} setContexto={setRed}/>
      <Input titulo={'green'} contento={green} setContexto={setGreen}/>
      <Input titulo={'blue'} contento={blue} setContexto={setBlue}/>
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
