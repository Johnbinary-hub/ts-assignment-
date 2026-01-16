const express = require("express");
const router = express.Router();

const registerAuth = require("../middlewares/registerAuth");
const allowRoles = require("../middleware/allowRoles");

const {
  createBackendBook, getBackendBooks, getBackendBook, updateBackendBook, deleteBackendBook,
  createFrontendBook, getFrontendBooks, getFrontendBook, updateFrontendBook, deleteFrontendBook,
  createAI_AutomationBook, getAI_AutomationBooks, getAI_AutomationBook, updateAI_AutomationBook, deleteAI_AutomationBook,
  createDevOpsBook, getDevOpsBooks, getDevOpsBook, updateDevOpsBook, deleteDevOpsBook,
  createSoftwareDevelopmentBook, getSoftwareDevelopmentBooks, getSoftwareDevelopmentBook, updateSoftwareDevelopmentBook, deleteSoftwareDevelopmentBook
} = require("../controllers/Ts-academyController");


// ===== BACKEND =====
router.post(
  "/backend",
  registerAuth,
  allowRoles("admin", "teacher"),
  createBackendBook
);
router.get("/backend", getBackendBooks);
router.get("/backend/:id", getBackendBook);
router.put(
  "/backend/:id",
  registerAuth,
  allowRoles("admin", "teacher"),
  updateBackendBook
);
router.delete(
  "/backend/:id",
  registerAuth,
  allowRoles("admin"),
  deleteBackendBook
);


// ===== FRONTEND =====
router.post(
  "/frontend",
  registerAuth,
  allowRoles("admin", "teacher"),
  createFrontendBook
);
router.get("/frontend", getFrontendBooks);
router.get("/frontend/:id", getFrontendBook);
router.put(
  "/frontend/:id",
  registerAuth,
  allowRoles("admin", "teacher"),
  updateFrontendBook
);
router.delete(
  "/frontend/:id",
  registerAuth,
  allowRoles("admin"),
  deleteFrontendBook
);


// ===== AI AUTOMATION =====
router.post(
  "/ai-automation",
  registerAuth,
  allowRoles("admin", "teacher"),
  createAI_AutomationBook
);
router.get("/ai-automation", getAI_AutomationBooks);
router.get("/ai-automation/:id", getAI_AutomationBook);
router.put(
  "/ai-automation/:id",
  registerAuth,
  allowRoles("admin", "teacher"),
  updateAI_AutomationBook
);
router.delete(
  "/ai-automation/:id",
  registerAuth,
  allowRoles("admin"),
  deleteAI_AutomationBook
);


// ===== DEVOPS =====
router.post(
  "/devops",
  registerAuth,
  allowRoles("admin", "teacher"),
  createDevOpsBook
);
router.get("/devops", getDevOpsBooks);
router.get("/devops/:id", getDevOpsBook);
router.put(
  "/devops/:id",
  registerAuth,
  allowRoles("admin", "teacher"),
  updateDevOpsBook
);
router.delete(
  "/devops/:id",
  registerAuth,
  allowRoles("admin"),
  deleteDevOpsBook
);


// ===== SOFTWARE DEVELOPMENT =====
router.post(
  "/software",
  registerAuth,
  allowRoles("admin", "teacher"),
  createSoftwareDevelopmentBook
);
router.get("/software", getSoftwareDevelopmentBooks);
router.get("/software/:id", getSoftwareDevelopmentBook);
router.put(
  "/software/:id",
  registerAuth,
  allowRoles("admin", "teacher"),
  updateSoftwareDevelopmentBook
);
router.delete(
  "/software/:id",
  registerAuth,
  allowRoles("admin"),
  deleteSoftwareDevelopmentBook
);

module.exports = router;
