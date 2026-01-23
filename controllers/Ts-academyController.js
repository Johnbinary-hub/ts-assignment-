import BackendModel from "../models/backend.js";
import FrontendModel from "../models/frontend.js";
import AI_AutomationModel from "../models/AI-Automation.js";
import DevOpsModel from "../models/DevOps.js";
import SoftwareDevelopmentModel from "../models/SoftwareDevelopment.js";
import cloudinary from "../Config/cloudinaryConfig.js";
// --- CREATE ---


const createBook = async (req, res, Model) => {
  try {
    let bookData = { ...req.body }; // start with request body

    // Check if image is provided
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    // Handle image upload
    const uploadPromise = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "books" },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(req.file.buffer);
    });

    const result = await uploadPromise;
    bookData.image = result.secure_url;
    bookData.imageId = result.public_id;

    const newBook = await Model.create(bookData);
    res.status(201).json(newBook);
  } catch (err) {
    console.error(err);
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
    const book = await Model.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    let updateData = { ...req.body };

    // Handle image upload if a new file exists
    if (req.file) {
      // Delete old image from Cloudinary if exists
      if (book.imageId) {
        await cloudinary.uploader.destroy(book.imageId);
      }

      // Upload new image
      const uploadPromise = new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "books" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        uploadStream.end(req.file.buffer);
      });

      const result = await uploadPromise;
      updateData.image = result.secure_url;
      updateData.imageId = result.public_id;
    }

    const updatedBook = await Model.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// --- DELETE ---
const deleteBook = async (req, res, Model) => {
  try {
    const book = await Model.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    // Delete image from Cloudinary if exists
    if (book.imageId) {
      await cloudinary.uploader.destroy(book.imageId);
    }

    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- EXPORT HANDLERS FOR EACH CATEGORY ---
const createBackendBook = (req, res) => createBook(req, res, BackendModel);
const getBackendBooks = (req, res) => getBooks(req, res, BackendModel);
const getBackendBook = (req, res) => getBook(req, res, BackendModel);
const updateBackendBook = (req, res) => updateBook(req, res, BackendModel);
const deleteBackendBook = (req, res) => deleteBook(req, res, BackendModel);

const createFrontendBook = (req, res) => createBook(req, res, FrontendModel);
const getFrontendBooks = (req, res) => getBooks(req, res, FrontendModel);
const getFrontendBook = (req, res) => getBook(req, res, FrontendModel);
const updateFrontendBook = (req, res) => updateBook(req, res, FrontendModel);
const deleteFrontendBook = (req, res) => deleteBook(req, res, FrontendModel);

const createAI_AutomationBook = (req, res) => createBook(req, res, AI_AutomationModel);
const getAI_AutomationBooks = (req, res) => getBooks(req, res, AI_AutomationModel);
const getAI_AutomationBook = (req, res) => getBook(req, res, AI_AutomationModel);
const updateAI_AutomationBook = (req, res) => updateBook(req, res, AI_AutomationModel);
const deleteAI_AutomationBook = (req, res) => deleteBook(req, res, AI_AutomationModel);

const createDevOpsBook = (req, res) => createBook(req, res, DevOpsModel);
const getDevOpsBooks = (req, res) => getBooks(req, res, DevOpsModel);
const getDevOpsBook = (req, res) => getBook(req, res, DevOpsModel);
const updateDevOpsBook = (req, res) => updateBook(req, res, DevOpsModel);
const deleteDevOpsBook = (req, res) => deleteBook(req, res, DevOpsModel);

const createSoftwareDevelopmentBook = (req, res) => createBook(req, res, SoftwareDevelopmentModel);
const getSoftwareDevelopmentBooks = (req, res) => getBooks(req, res, SoftwareDevelopmentModel);
const getSoftwareDevelopmentBook = (req, res) => getBook(req, res, SoftwareDevelopmentModel);
const updateSoftwareDevelopmentBook = (req, res) => updateBook(req, res, SoftwareDevelopmentModel);
const deleteSoftwareDevelopmentBook = (req, res) => deleteBook(req, res, SoftwareDevelopmentModel);

export {
  createBackendBook,
  getBackendBooks,
  getBackendBook,
  updateBackendBook,
  deleteBackendBook,

  createFrontendBook,
  getFrontendBooks,
  getFrontendBook,
  updateFrontendBook,
  deleteFrontendBook,

  createAI_AutomationBook,
  getAI_AutomationBooks,
  getAI_AutomationBook,
  updateAI_AutomationBook,
  deleteAI_AutomationBook,

  createDevOpsBook,
  getDevOpsBooks,
  getDevOpsBook,
  updateDevOpsBook,
  deleteDevOpsBook,

  createSoftwareDevelopmentBook,
  getSoftwareDevelopmentBooks,
  getSoftwareDevelopmentBook,
  updateSoftwareDevelopmentBook,
  deleteSoftwareDevelopmentBook
};
