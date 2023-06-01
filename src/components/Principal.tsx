import { useContexto } from "../hooks";
import Input from "./Input";
import styled, { ThemeProvider } from 'styled-components'

function Principal() {
    const { red, green, blue, setRed, setGreen, setBlue} = useContexto()
    const color = {
        cor: `${red},${green},${blue}`
    }
    return (
        <ThemeProvider theme={color}>
            <Fundo>
                <Borda>
                    <Input titulo={'red'} contento={red} setContexto={setRed}/>
                    <Input titulo={'green'} contento={green} setContexto={setGreen}/>
                    <Input titulo={'blue'} contento={blue} setContexto={setBlue}/>
                </Borda>
            </Fundo>
      </ThemeProvider>
    )
}

const Fundo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

const Borda = styled.div`
    background-color: rgb(${props => props.theme.cor});
    padding: 100px;
    border-radius: 20px;
`


export default Principal