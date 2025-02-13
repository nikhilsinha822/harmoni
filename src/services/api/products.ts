import { ProductType } from "../../types/product";
import { clientApi } from "../axios";

export const getAllProducts = async (): Promise<ProductType[]> => {
  const response = await clientApi.get("/products");
  return response.data;
};
