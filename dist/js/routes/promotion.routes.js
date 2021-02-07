"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const promotion_1 = require("../controllers/promotion");
const router = express_1.Router();
router.get("/getAllPromotions", promotion_1.getAllPromotions);
router.get("/getPromotionById/:id", promotion_1.getPromotionById);
router.get("/generatePromotionsData", promotion_1.generatePromotionsData);
router.post("/addPromotion", promotion_1.addPromotion);
router.put("/updatePromotion/:id", promotion_1.updatePromotion);
router.delete("/deletePromotion/:id", promotion_1.deletePromotionById);
router.delete("/deleteAllPromotions", promotion_1.deleteAllPromotions);
exports.default = router;