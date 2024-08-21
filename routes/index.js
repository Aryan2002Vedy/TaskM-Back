import express from "express";
import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";

const router = express.Router();

// Check if server is fine or not
router.get('/ping', (req,res) => { 
    return res.status(200).json({ message: "Server is working as expected!" })
})

router.use("/user", userRoutes); //api/user/login
router.use("/task", taskRoutes);

export default router;