import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { addConversation, createChat, deleteChat, getAllchats, getConversation } from "../controllers/chatControllers.js";

const router=express.Router();

router.post("/new",isAuth,createChat);
router.get("/all",isAuth,getAllchats);
router.post("/:id",isAuth,addConversation);
router.get("/:id",isAuth,getConversation);
router.delete("/:id",isAuth,deleteChat);

export default router;