import { CheckoutValues } from "@/app/checkout/checkout.schema";

export interface productType {
  sold: number;
  id: string;
  title: string;
  images: string[];
  imageCover: string;
  price: number;
  quantity: number;
  ratingsAverage: number;
  description: string;
  priceAfterDiscount?: number;
  ratingsQuantity: number;
  category: productCategory;
  subcategory: subCategoryType[];
  brand: productBrand;
  reviews: reviewType[];
}
export interface subCategoryType {
  _id: string;
  name: string;
  slug: string;
  category: string;
}
export interface reviewType {
  _id: string;
  review: string;
  rating: number;
  product: string;
}

export interface productCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface productBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface slideType {
  image: string;
  title: string;
  text: string;
  whiteBtn: string;
  transparentBtn: string;
}

export interface cartItemType {
  _id: string;
  cartOwner: string;
  products: productItemType[];
  totalCartPrice: number;
}
export interface productItemType {
  count: number;
  _id: string;
  product: productType;
  price: number;
}
export interface orderType {
  shippingAddress: CheckoutValues;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  cartItems: productItemType[];
  createdAt: string;
  id: string;
}
export interface MetaData {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
}

export interface ProductResponse {
  results: number;
  metadata: MetaData;
  data: productType[];
}
export interface wishListType {
  sold: string;
  images: string[];
  subcategory: subCategoryType[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: productCategory;
  brand: productBrand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
export interface addresseTaye {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
}
export type profileInfoType = {
  name: string;
  email: string;
  phone: string | number;
};
export type changePasswordType = {
  currentPassword: string;
  password: string;
  rePassword: string;
};
export type productReviewType = {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};
