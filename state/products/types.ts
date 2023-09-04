export interface IProductState {
  error: boolean
  productsData?: IProduct[]
  currentProductsRelated?: IProduct[]
  newProductsRelated?: IProduct[]
  defaultProducts?: string[]
  shippingTime?: IShippingTime
}

export interface IProduct {
  id: string
  id_prod: string
  id_parent: string
  short_description: string
  sku: string
  name: string
  name_parent: string
  category: string
  type: string
  image_url: string
  image: string
  attributes: {
    [attribute: string]: string[]
  }
  price: number
  regular_price: number
  children: IChildrenProd[]
  gallery_image_url: string[]
  discount: number | string
  discount_pill: string
  installments: number
  offer: string
}

export interface IChildrenProd {
  id: string
  backorder: boolean
  sku: string
  name: string
  price: number
  stock: number
  regular_price: number
  attributes: IAttributes
}

export interface IAttributes {
  [attribute: string]: string
}
export interface IShippingTime {
  data: {
    max_date: string;
    min_date: string;
    real_date: string;
  };
  status: number;
}