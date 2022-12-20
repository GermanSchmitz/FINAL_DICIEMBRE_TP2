import DocumentoPasajero from "./models/DocumentoPasajero";

/**
 * No entendi varias cosas del enunciado. Una de las cosas que no entendi y no supieron explicarme:
 * Para que estan los 3 puntos del aeropuerto (inicio, mitad y cercaDelFinal).
 * Pregunte tambien pero nadie me pudo responder en el 2) que hacer con el pasaporte irregular?
 * En el comienzo del ejercicio no esta muy claro si el pasaporte forma parte de la tarjeta de embarque, si va aparte,
 * si el pasaporte tiene la capacidad propia de decir si es irregular o no ya que se muestra como un objeto Object.
 * 
 * En el 2) dijeron que no era necesario hacerlo pero igualmente intente implementarlo ya que cada profesor y cada catedra
 * entregaba distinto.
 * */


export default class Sistema {
    #registroDocumentos;
    #notificador;
    constructor(notificador, registroDocumentos) {
        this.#notificador = notificador;
        this.#registroDocumentos = registroDocumentos;
    }
    //seria el ingresar a la fila
    async cargarDocumento({
        nombre,
        apellido,
        pasaporte,
        fechaDeNacimiento,
        horaDeVuelo,
    }) {
        const documento = new DocumentoPasajero({
            nombre,
            apellido,
            pasaporte,
            fechaDeNacimiento,
            horaDeVuelo,
        });

        if (documento.estaProximoASalir()) {
            this.#notificador.notificarAltaPrioridad({
                pasaporte,
                horaDeVuelo,
            });
        }

        await this.#registroDocumentos.registrarDocumento(documento);

        return documento.asDto();
    }
}
