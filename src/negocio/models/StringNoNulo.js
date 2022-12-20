export default class StringNoNulo {
    #valor;

    constructor(valor) {
        if (typeof valor !== 'string') {
            throw new Error('La cadena debe ser una cadena de caracteres');
        }
        if (valor === null){
            throw new Error('La cadena no puede ser nula.')
        }
        this.#valor = valor;
    }
    
    get valor() { return this.#valor; }
}