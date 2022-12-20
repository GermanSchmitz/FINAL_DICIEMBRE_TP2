import registroDocumentos from "../../negocio/registros/RegistroDocumentosPasajerosFactory.js";
import notificador from "../../negocio/notificador/NotificadorFactory.js";
import Sistema from "../../negocio/Sistema";

const sistema = new Sistema(notificador, registroDocumentos);

export async function controladorPostDocumento(req, res, next) {
    try {
        const dtoDocumentoCreado = await sistema.cargarDocumento(req.body);
        res.status(201).json(dtoDocumentoCreado);
    } catch (error) {
        next(error);
    }
}
