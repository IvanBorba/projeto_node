import { Router } from "express";

import createPetController from "../controllers/createPet.controller";
import listPetsController from "../controllers/listPets.controller";
import listUserPetsController from "../controllers/listUserPets.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.get("", verifyAuthTokenMiddleware, listPetsController);
router.get("/:owner_id", verifyAuthTokenMiddleware, listUserPetsController);
router.post("/:owner_id/new", verifyAuthTokenMiddleware, createPetController);

export default router;
