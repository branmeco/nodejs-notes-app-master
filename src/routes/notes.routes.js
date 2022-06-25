import { Router } from "express";
import {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// Nueva nota
router.get("/notes/add", isAuthenticated, renderNoteForm);

router.post("/notes/new-note", isAuthenticated, createNewNote);

// Obtener todas las notas
router.get("/notes", isAuthenticated, renderNotes);

// Editar notas
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

// Eliminar notas
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

export default router;
