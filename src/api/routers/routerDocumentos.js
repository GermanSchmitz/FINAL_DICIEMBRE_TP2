import { Router } from "express";
import { controladorPostDocumento } from "../controllers/controladorDocumentos.js";

const router = new Router();

router.post("/", controladorPostDocumento);

export default router;
