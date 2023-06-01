function Input({titulo, contento, setContexto}:any){
    return (
          <input type="text" placeholder={titulo} value={contento} onChange={(e) => setContexto(e.target.value)} />
      );
}

export default Input