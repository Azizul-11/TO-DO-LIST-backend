import express from "express";
import { deletetask, getMyTask, newTask, updatetask } from "../controllers/task.js";
import { isAunthenticated } from "../middlewear/auth.js";

const router =express.Router();


router.post("/new",isAunthenticated, newTask);


router.get("/my",isAunthenticated, getMyTask);

router.route("/:id")
.put(isAunthenticated,updatetask)
.delete(isAunthenticated,deletetask);



export default router;
