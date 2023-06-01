import { Provider } from "./context";
import { useContexto } from "./hooks";

function Input() {
  const { red, green, blue, setRed, setGreen, setBlue} = useContexto()

  function hand(event:any){

  }
  return (
    <div>
      <input type="text" value={red} onChange={(e) => setRed(e.target.value)} />
      <input type="text" value={green}  onChange={(e) => setGreen(e.target.value)}/>
      <input type="text" value={blue}  onChange={(e) => setBlue(e.target.value)}/>
    </div>
  );
}

function App(){
  return(
    <Provider>
      <Input/>
    </Provider>
  )
} 
export default App;
