import Notificador from './NotificadorAltaPrioridad';
import { MODO } from '../config/config.js';

let notificador

if (MODO === 'memoria') {
    notificador = new NotificadorAltaPrioridad()
}

export default notificador