import { useContexto } from "../hooks";
import Input from "./Input";

function Principal() {
    const { red, green, blue, setRed, setGreen, setBlue} = useContexto()
  
    return (
      <div style={{backgroundColor: 'rgb(100,100,100)'}}>
        <Input titulo={'red'} contento={red} setContexto={setRed}/>
        <Input titulo={'green'} contento={green} setContexto={setGreen}/>
        <Input titulo={'blue'} contento={blue} setContexto={setBlue}/>
      </div>
    );
}

export default Principal