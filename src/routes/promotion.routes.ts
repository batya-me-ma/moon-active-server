import { Router } from "express";
import {
  getAllPromotions,
  getPromotionById,
  addPromotion,
  updatePromotion,
  deletePromotionById,
  generatePromotionsData,
  deleteAllPromotions,
} from "../controllers/promotion";

const router: Router = Router();

router.get("/getAllPromotions", getAllPromotions);

router.get("/getPromotionById/:id", getPromotionById);

router.get("/generatePromotionsData", generatePromotionsData);

router.post("/addPromotion", addPromotion);

router.put("/updatePromotion/:id", updatePromotion);

router.delete("/deletePromotion/:id", deletePromotionById);

router.delete("/deleteAllPromotions", deleteAllPromotions);

export default router;
