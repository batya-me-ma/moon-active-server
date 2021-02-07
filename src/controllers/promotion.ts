import { Response, Request } from "express";
import { IPromotion } from "./../types/promotion";
import Promotion from "./../models/promotion";

const getAllPromotions = async (req: Request, res: Response): Promise<void> => {
  try {
    const skip = parseInt(req.query.skip as string) || 0;
    const limit = parseInt(req.query.take as string) || 100;
    const promotions: IPromotion[] = await Promotion.find()
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    res.status(200).json({ promotions });
  } catch (error) {
    throw error;
  }
};

const getPromotionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const promotion: IPromotion | null = await Promotion.findById(
      req.params.id
    );
    res.status(200).json({ promotion });
  } catch (error) {
    throw error;
  }
};

const addPromotion = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IPromotion,
      | "promotionName"
      | "promotionType"
      | "promotionStartDate"
      | "promotionEndDate"
      | "userGroupName"
    >;

    const promotion: IPromotion = new Promotion({
      promotionName: body.promotionName,
      promotionType: body.promotionType,
      promotionStartDate: body.promotionStartDate,
      promotionEndDate: body.promotionEndDate,
      userGroupName: body.userGroupName,
    });

    const newPromotion: IPromotion = await promotion.save();

    res.status(201).json({
      message: "Promotion added Successfully!",
      promotion: newPromotion,
    });
  } catch (error) {
    throw error;
  }
};

const updatePromotion = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    console.log("body", body);
    const updatePromotion: IPromotion | null = await Promotion.findByIdAndUpdate(
      { _id: id },
      body
    );
    res.status(200).json({
      message: "Promotion updated Successfully!",
      promotion: updatePromotion,
    });
  } catch (error) {
    throw error;
  }
};

const deletePromotionById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.params.id);
    const deletedPromotion: IPromotion | null = await Promotion.findByIdAndRemove(
      { _id: req.params.id }
    );
    res.status(200).json({
      message: "Promotion deleted Successfully!",
      promotion: deletedPromotion,
    });
  } catch (error) {
    console.log(req.params.id);
    throw error;
  }
};

const deleteAllPromotions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Promotion.deleteMany({});
    res.status(200).json({
      message: "All Promotions deleted Successfully!",
    });
  } catch (error) {
    throw error;
  }
};

const generatePromotionsData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const promotions: IPromotion[] = [];
    for (var i = 0; i < 1000; i++) {
      const promotion: IPromotion = new Promotion({
        promotionName: "name " + i,
        promotionType: "Basic",
        promotionStartDate: new Date(
          +new Date() - Math.floor(Math.random() * 10000000000)
        )
          .toISOString()
          .split("T")[0],
        promotionEndDate: new Date(
          +new Date() - Math.floor(Math.random() * 10000000000)
        )
          .toISOString()
          .split("T")[0],
        userGroupName: "user Group Name " + i,
      });
      promotion.save();
      promotions.push(promotion);
    }

    res.status(200).json({ promotions });
  } catch (error) {
    throw error;
  }
};

export {
  getAllPromotions,
  getPromotionById,
  addPromotion,
  updatePromotion,
  deletePromotionById,
  deleteAllPromotions,
  generatePromotionsData,
};
