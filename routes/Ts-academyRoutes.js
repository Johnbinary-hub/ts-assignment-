const express = require("express");
const router = express.Router();
const {
  createBackendBook, getBackendBooks, getBackendBook, updateBackendBook, deleteBackendBook,
  createFrontendBook, getFrontendBooks, getFrontendBook, updateFrontendBook, deleteFrontendBook,
  createAI_AutomationBook, getAI_AutomationBooks, getAI_AutomationBook, updateAI_AutomationBook, deleteAI_AutomationBook,
  createDevOpsBook, getDevOpsBooks, getDevOpsBook, updateDevOpsBook, deleteDevOpsBook,
  createSoftwareDevelopmentBook, getSoftwareDevelopmentBooks, getSoftwareDevelopmentBook, updateSoftwareDevelopmentBook, deleteSoftwareDevelopmentBook
} = require("../controllers/Ts-academyController");

// --- BACKEND ---
router.post("/backend", createBackendBook);
router.get("/backend", getBackendBooks);
router.get("/backend/:id", getBackendBook);
router.put("/backend/:id", updateBackendBook);
router.delete("/backend/:id", deleteBackendBook);

// --- FRONTEND ---
router.post("/frontend", createFrontendBook);
router.get("/frontend", getFrontendBooks);
router.get("/frontend/:id", getFrontendBook);
router.put("/frontend/:id", updateFrontendBook);
router.delete("/frontend/:id", deleteFrontendBook);

// --- AI AUTOMATION ---
router.post("/ai-automation", createAI_AutomationBook);
router.get("/ai-automation", getAI_AutomationBooks);
router.get("/ai-automation/:id", getAI_AutomationBook);
router.put("/ai-automation/:id", updateAI_AutomationBook);
router.delete("/ai-automation/:id", deleteAI_AutomationBook);

// --- DEVOPS ---
router.post("/devops", createDevOpsBook);
router.get("/devops", getDevOpsBooks);
router.get("/devops/:id", getDevOpsBook);
router.put("/devops/:id", updateDevOpsBook);
router.delete("/devops/:id", deleteDevOpsBook);

// --- SOFTWARE DEVELOPMENT ---
router.post("/software", createSoftwareDevelopmentBook);
router.get("/software", getSoftwareDevelopmentBooks);
router.get("/software/:id", getSoftwareDevelopmentBook);
router.put("/software/:id", updateSoftwareDevelopmentBook);
router.delete("/software/:id", deleteSoftwareDevelopmentBook);

module.exports = router;
