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
