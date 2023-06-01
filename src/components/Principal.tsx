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
            <FundoSld>
                <BordaSld>
                    <Input titulo={'red'} contento={red} setContexto={setRed}/>
                    <Input titulo={'green'} contento={green} setContexto={setGreen}/>
                    <Input titulo={'blue'} contento={blue} setContexto={setBlue}/>
                </BordaSld>
            </FundoSld>
      </ThemeProvider>
    )
}

const FundoSld = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: rgb(54,54,54)
`

const BordaSld = styled.div`
    background-color: rgb(${props => props.theme.cor});
    padding: 100px;
    border-radius: 20px;
`


export default Principal