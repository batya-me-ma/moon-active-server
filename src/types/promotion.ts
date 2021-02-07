import { Document } from "mongoose";

export interface IPromotionType extends Document {
  Basic: string;
  Common: string;
  Epic: string;
}

export interface IPromotion extends Document {
  promotionName: string;
  promotionType: String;
  promotionStartDate: Date;
  promotionEndDate: Date;
  userGroupName: string;
}
