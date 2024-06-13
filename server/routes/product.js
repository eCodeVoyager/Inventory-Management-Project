import express from "express";
import { addProduct, getProduct, getAllProducts, deleteProduct } from "../controllers/sproductsController.js";
import multer from "multer";
import path from "path";
import { __dirname } from '../dirname.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/addProduct", upload.single("image"), addProduct);
router.get("/getProduct/:productId", getProduct);
router.get("/getAllProducts", getAllProducts);
router.delete("/deleteProduct/:productId", deleteProduct);

export default router;
