import StringNoNulo from "./StringNoNulo";

export default class DocumentoPasajero {
    #nombre;
    #apellido;
    #pasaporte;
    #fechaDeNacimiento;
    #horaDeVuelo;

    constructor({
        nombre,
        apellido,
        pasaporte,
        fechaDeNacimiento,
        horaDeVuelo,
    }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pasaporte = pasaporte;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.horaDeVuelo = horaDeVuelo;
    }

    set nombre(nombre) {
        this.#nombre = new StringNoNulo(nombre);
    }
    set apellido(apellido) {
        this.#apellido = new StringNoNulo(apellido);
    }
    set pasaporte(pasaporte) {
        this.#pasaporte = new NumericoNoNuloPositivo(pasaporte);
    }
    set fechaDeNacimiento(fechaDeNacimiento) {
        this.#fechaDeNacimiento = new Date(fechaDeNacimiento);
    }
    set horaDeVuelo(horaDeVuelo) {
        if (horaDeVuelo > 23) {
            throw new Error("La hora debe estar dentro de 0 y 23.");
        }
        this.#horaDeVuelo = new NumericoNoNuloPositivo(horaDeVuelo);
    }
    get nombre() {
        return this.#nombre;
    }
    get apellido() {
        return this.#apellido;
    }
    get pasaporte() {
        return this.#pasaporte;
    }
    get fechaDeNacimiento() {
        return this.#fechaDeNacimiento;
    }
    get horaDeVuelo() {
        return this.#horaDeVuelo;
    }

    estaProximoASalir() {
        const hoy = new Date();
        const horaActual = hoy.getHours();
        return this.#horaDeVuelo - horaActual <= 1;
    }

    asDto() {
        return Object.freeze({
            nombre: this.#nombre.valor,
            apellido: this.#apellido.valor,
            pasaporte: this.#pasaporte.valor,
            fechaDeNacimiento: this.#fechaDeNacimiento,
            horaDeVuelo: this.#horaDeVuelo.valor,
        });
    }
}
