"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const promotionSchema = new mongoose_1.Schema({
    promotionName: {
        type: String,
        required: true,
    },
    promotionType: {
        type: String,
        enum: ["Basic", "Common", "Epic"],
        default: "Basic",
    },
    promotionStartDate: {
        type: Date,
    },
    promotionEndDate: {
        type: Date,
    },
    userGroupName: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.model("Promotion", promotionSchema);
