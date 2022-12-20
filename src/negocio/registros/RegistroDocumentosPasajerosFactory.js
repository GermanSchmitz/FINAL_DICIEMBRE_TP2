import RegistroDocumentosPasajerosMemoria from "./RegistroDocumentosPasajerosMemoria";
import { MODO } from "../config/config";
let registro;

if (MODO === "memoria") {
    registro = new RegistroDocumentosPasajerosMemoria();
}
export default registro;
