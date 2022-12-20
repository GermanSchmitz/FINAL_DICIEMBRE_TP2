import express from "express";
import routerDocumentos from "./routers/routerDocumentos.js";

const app = express();

app.use(express.json());

app.use("/api/documentos", routerDocumentos); //aca iba a poner esto pero no sabia si estaba mal https://aeropuerto.deno.dev/verif?num=<nro pasaporte>

const puerto = 8080;
const servidor = app.listen(puerto, () => {
    console.log(`conectado y escuchando en puerto ${puerto}`);
});
