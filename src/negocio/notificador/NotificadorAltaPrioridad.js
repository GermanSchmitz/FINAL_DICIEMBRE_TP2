export default class NotificadorAltaPrioridad {
    notificarAltaPrioridad({ pasaporte, horaDeVuelo }) {
        console.log(
            `Registramos que el pasajero pasaporte nro: ${pasaporte} tiene el vuelo proximo dentro de menos de 1 hora. ${horaDeVuelo}`
        );
    }
}
