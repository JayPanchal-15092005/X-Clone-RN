import express from "express";
import { getUserProfile, updateProfile, syncUser, getCurrentUser, followUser } from "../controllers/user.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public route
router.get("/profile/:username", getUserProfile);

// Protected routes
router.post("/sync", protectRoute, syncUser);
router.get("/me", protectRoute, getCurrentUser); // i changed the request POST to GET because there is some error is come in the post s i changed it to get if the error is come go change the request to the POST(Diffult States).
router.put("/profile", protectRoute, updateProfile);
router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;