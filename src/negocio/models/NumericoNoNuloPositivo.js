class NumericoNoNuloPositivo {
    #valor;

    constructor(valor) {
        if (!Number.isInteger(valor)) {
            throw new Error('el valor debe ser entero');
        }
        if (valor === null) {
            throw new Error('el valor no debe ser nulo');
        }
        if (valor <= 0){
            throw new Error('El valor no puede ser negativo')
        }
        this.#valor = valor;
    }

    get valor() { return this.#valor; }
}