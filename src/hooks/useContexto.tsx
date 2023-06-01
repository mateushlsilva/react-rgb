import { useContext } from "react";
import { Contexto } from "../context";

export default function useContexto() {
    const contexto = useContext(Contexto);
    return contexto
}