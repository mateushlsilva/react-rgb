import { createContext, useEffect, useState } from "react";
import { RGBProps, Props } from '../types'



export const Contexto = createContext({} as RGBProps);

export function Provider({ children }: any) {
    const [red, setRed] = useState({} as Props)
    const [green, setGreen] = useState({} as Props)
    const [blue, setBlue] = useState({} as Props)

    useEffect(() => {
        setRed({color:'100'})
        setGreen({color:'100'})
        setBlue({color:'100'})
    }, [])

    return (
        <Contexto.Provider value={{ red, green, blue, setRed, setGreen, setBlue }} >
            <span>{children}</span>
        </Contexto.Provider>
    )
}