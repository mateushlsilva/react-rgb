import { createContext, useEffect, useState } from "react";
import { RGBProps } from '../types'



export const Contexto = createContext({} as RGBProps);

export function Provider({ children }: any) {
    const [red, setRed] = useState('' as string)
    const [green, setGreen] = useState('' as string)
    const [blue, setBlue] = useState('' as string)

    useEffect(() => {
        (async function() {
            setRed('100')
            setGreen('100')
            setBlue('100')
        })()
    }, [])
    
    return (
        <Contexto.Provider value={{ red, green, blue, setRed, setGreen, setBlue }} >
            <span>{children}</span>
        </Contexto.Provider>
    )
}