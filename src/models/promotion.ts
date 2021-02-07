import { model, Schema } from "mongoose";
import { IPromotion } from "./../types/promotion";

const promotionSchema: Schema = new Schema(
  {
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
  },
  { timestamps: true }
);

export default model<IPromotion>("Promotion", promotionSchema);
