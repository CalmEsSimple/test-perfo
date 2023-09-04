export interface INewsLetter {
    error: boolean
    errorMessage: string,
    response: {
        message: string
    }
}

export interface ISubscribeStockOut {
    error: boolean
    errorMessage: string,
    response: {
        message: string
    }
}

export interface IMailchimp {
    subscribeStockOut: ISubscribeStockOut
    newsletter: INewsLetter
}