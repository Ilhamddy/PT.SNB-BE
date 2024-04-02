import express from "express";

import RoleController from "../controllers/RoleController";

const router = express.Router();
router.get("/role", RoleController.getRole);
router.post("/addrole", RoleController.createRole);
router.delete("/deleterole/:id", RoleController.deleteRole);
router.patch("/updaterole/:id", RoleController.updateRole);
router.get("/role/:id", RoleController.getRoleById);

export default router;
