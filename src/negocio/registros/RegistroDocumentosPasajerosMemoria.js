export default class RegistroDocumentosPasajerosMemoria {
    #documentos;

    constructor() {
        this.#documentos = [];
    }

    registrarDocumento(documento) {
        this.#documentos.push(documento.asDto());
    }
}
