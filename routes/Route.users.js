import pool from "../Database/db.config.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Yes this works");
}); // get users
router.get(); // get user by /:id
router.post(); // create new user
router.put(); // update a particular user details /:id
router.delete(); // delete user

export default router;
