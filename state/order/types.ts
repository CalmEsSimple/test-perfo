export interface IOrderState {
    orderData?: IOrder,
    error?: boolean
}

export interface IOrder {
    id: number,
    parent_id: number,
    number: string,
    order_key: string,
    created_via: string,
    status: string,
    currency: string,
    date_created: string,
    date_created_gmt: string,
    date_modified: string,
    date_modified_gmt: string,
    discount_total: string,
    discount_tax: string,
    shipping_total: string,
    shipping_tax: string,
    cart_tax: string,
    total: string,
    total_tax: string,
    prices_include_tax: false,
    customer_id: 0,
    customer_ip_address: string,
    customer_user_agent: string,
    customer_note: string,
    billing: {
        first_name: string,
        last_name: string,
        company: string,
        address_1: string,
        address_2: string,
        city: string,
        state: string,
        postcode: string,
        country: string,
        email: string,
        phone: string
    },
    shipping: {
        first_name: string,
        last_name: string,
        company: string,
        address_1: string,
        address_2: string,
        city: string,
        state: string,
        postcode: string,
        country: string,
    },
    payment_method: string,
    payment_method_title: string,
    transaction_id: string,
    date_paid: string,
    date_paid_gmt: string,
    date_completed: null,
    date_completed_gmt: null,
    cart_hash: string,
    meta_data: IMetaData[],
    line_items: {
        id: number,
        name: string,
        product_id: number,
        variation_id: number,
        quantity: number,
        tax_class: string,
        subtotal: string,
        subtotal_tax: string,
        total: string,
        total_tax: string,
        taxes: {
            id: number,
            total: string,
            subtotal: string
        }[],
        meta_data: IMetaData[],
        sku: string,
        price: number
        }[],
    tax_lines: {
        id: number,
        rate_code: string,
        rate_id: number,
        label: string,
        compound: boolean,
        tax_total: string,
        shipping_tax_total: string,
        meta_data: IMetaData[],
    }[],
    shipping_lines: {
        id: number,
        method_title: string,
        method_id: string,
        total: string,
        total_tax: string,
        taxes: any[],
        meta_data: IMetaData[]
    }[],
    fee_lines: any[],
    coupon_lines: any[],
    refunds: any[],
}

interface IMetaData {
    id: number,
    key: string,
    value: any
}