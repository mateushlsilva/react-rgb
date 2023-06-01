function Input({contento, setContexto}:any){
    return (
          <input type="text" value={contento} onChange={(e) => setContexto(e.target.value)} />
      );
}

export default Input