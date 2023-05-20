import express from "express";
import {login, register, getMyprofile,logout } from "../controllers/user.js";
import {isAunthenticated} from "../middlewear/auth.js"

const router=express.Router();


router.post("/new",register);

router.post("/login",login);

router.get("/logout",logout);

router.get("/me",isAunthenticated,getMyprofile)


    
export default router;