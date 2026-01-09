const BackendModel = require("../models/backend");
const FrontendModel = require("../models/frontend");
const AI_AutomationModel = require("../models/AI-Automation");
const DevOpsModel = require("../models/DevOps");
const SoftwareDevelopmentModel = require("../models/SoftwareDevelopment");

// --- CREATE ---
const createBook = async (req, res, Model) => {
  try {
    const newBook = await Model.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- READ ALL ---
const getBooks = async (req, res, Model) => {
  try {
    const books = await Model.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- READ ONE ---
const getBook = async (req, res, Model) => {
  try {
    const book = await Model.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- UPDATE ---
const updateBook = async (req, res, Model) => {
  try {
    const updatedBook = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- DELETE ---
const deleteBook = async (req, res, Model) => {
  try {
    const deleted = await Model.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- EXPORT HANDLERS FOR EACH CATEGORY ---
module.exports = {
  createBackendBook: (req, res) => createBook(req, res, BackendModel),
  getBackendBooks: (req, res) => getBooks(req, res, BackendModel),
  getBackendBook: (req, res) => getBook(req, res, BackendModel),
  updateBackendBook: (req, res) => updateBook(req, res, BackendModel),
  deleteBackendBook: (req, res) => deleteBook(req, res, BackendModel),

  createFrontendBook: (req, res) => createBook(req, res, FrontendModel),
  getFrontendBooks: (req, res) => getBooks(req, res, FrontendModel),
  getFrontendBook: (req, res) => getBook(req, res, FrontendModel),
  updateFrontendBook: (req, res) => updateBook(req, res, FrontendModel),
  deleteFrontendBook: (req, res) => deleteBook(req, res, FrontendModel),

  createAI_AutomationBook: (req, res) => createBook(req, res, AI_AutomationModel),
  getAI_AutomationBooks: (req, res) => getBooks(req, res, AI_AutomationModel),
  getAI_AutomationBook: (req, res) => getBook(req, res, AI_AutomationModel),
  updateAI_AutomationBook: (req, res) => updateBook(req, res, AI_AutomationModel),
  deleteAI_AutomationBook: (req, res) => deleteBook(req, res, AI_AutomationModel),

  createDevOpsBook: (req, res) => createBook(req, res, DevOpsModel),
  getDevOpsBooks: (req, res) => getBooks(req, res, DevOpsModel),
  getDevOpsBook: (req, res) => getBook(req, res, DevOpsModel),
  updateDevOpsBook: (req, res) => updateBook(req, res, DevOpsModel),
  deleteDevOpsBook: (req, res) => deleteBook(req, res, DevOpsModel),

  createSoftwareDevelopmentBook: (req, res) => createBook(req, res, SoftwareDevelopmentModel),
  getSoftwareDevelopmentBooks: (req, res) => getBooks(req, res, SoftwareDevelopmentModel),
  getSoftwareDevelopmentBook: (req, res) => getBook(req, res, SoftwareDevelopmentModel),
  updateSoftwareDevelopmentBook: (req, res) => updateBook(req, res, SoftwareDevelopmentModel),
  deleteSoftwareDevelopmentBook: (req, res) => deleteBook(req, res, SoftwareDevelopmentModel)
};
