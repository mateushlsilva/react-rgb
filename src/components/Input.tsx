import styled from 'styled-components'

function Input({titulo, contento, setContexto}:any){
    return (
          <InputSld type="text" placeholder={titulo} value={contento} onChange={(e) => setContexto(e.target.value)} />
      );
}

const InputSld = styled.input`
    border-radius: 8px;
    padding: 10px;
    width: 130px;
    height: 25px;
    margin-left: 20px;
    text-align: center;
    font-size: larger;
`

export default Input