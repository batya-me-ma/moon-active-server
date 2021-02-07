"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePromotionsData = exports.deleteAllPromotions = exports.deletePromotionById = exports.updatePromotion = exports.addPromotion = exports.getPromotionById = exports.getAllPromotions = void 0;
const promotion_1 = __importDefault(require("./../models/promotion"));
const getAllPromotions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const limit = parseInt(req.query.take) || 100;
        const promotions = yield promotion_1.default.find()
            .sort({ _id: -1 })
            .skip(skip)
            .limit(limit);
        res.status(200).json({ promotions });
    }
    catch (error) {
        throw error;
    }
});
exports.getAllPromotions = getAllPromotions;
const getPromotionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotion = yield promotion_1.default.findById(req.params.id);
        res.status(200).json({ promotion });
    }
    catch (error) {
        throw error;
    }
});
exports.getPromotionById = getPromotionById;
const addPromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const promotion = new promotion_1.default({
            promotionName: body.promotionName,
            promotionType: body.promotionType,
            promotionStartDate: body.promotionStartDate,
            promotionEndDate: body.promotionEndDate,
            userGroupName: body.userGroupName,
        });
        const newPromotion = yield promotion.save();
        res.status(201).json({
            message: "Promotion added Successfully!",
            promotion: newPromotion,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addPromotion = addPromotion;
const updatePromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        console.log("body", body);
        const updatePromotion = yield promotion_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({
            message: "Promotion updated Successfully!",
            promotion: updatePromotion,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updatePromotion = updatePromotion;
const deletePromotionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params.id);
        const deletedPromotion = yield promotion_1.default.findByIdAndRemove({ _id: req.params.id });
        res.status(200).json({
            message: "Promotion deleted Successfully!",
            promotion: deletedPromotion,
        });
    }
    catch (error) {
        console.log(req.params.id);
        throw error;
    }
});
exports.deletePromotionById = deletePromotionById;
const deleteAllPromotions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield promotion_1.default.deleteMany({});
        res.status(200).json({
            message: "All Promotions deleted Successfully!",
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteAllPromotions = deleteAllPromotions;
const generatePromotionsData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotions = [];
        for (var i = 0; i < 1000; i++) {
            const promotion = new promotion_1.default({
                promotionName: "name " + i,
                promotionType: "Basic",
                promotionStartDate: new Date(+new Date() - Math.floor(Math.random() * 10000000000))
                    .toISOString()
                    .split("T")[0],
                promotionEndDate: new Date(+new Date() - Math.floor(Math.random() * 10000000000))
                    .toISOString()
                    .split("T")[0],
                userGroupName: "user Group Name " + i,
            });
            promotion.save();
            promotions.push(promotion);
        }
        res.status(200).json({ promotions });
    }
    catch (error) {
        throw error;
    }
});
exports.generatePromotionsData = generatePromotionsData;
