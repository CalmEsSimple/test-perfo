
export const formatNumber = (number: number): string => {
    if(typeof number == "string") number = parseInt(number)
    const optionsFormat = { style: 'decimal', useGrouping: true, maximumFractionDigits: 2 };
    return number.toLocaleString('de-DE', optionsFormat)
}

export const formatNumberFromString = (number: string): string => {
    return new Intl.NumberFormat("de-DE").format(parseFloat(number));
}