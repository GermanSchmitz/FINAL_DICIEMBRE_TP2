import Sistema from "./Sistema.js";
import registro from "./registros/RegistroDocumentosPasajerosFactory.js";
import notificador from "./notificador/NotificadorFactory.js";

const sistema = new Sistema(notificador, registro);
