export interface NumberOptions{
    min?: number;
    max?: number;
    totalDecimals?: number;
}

export const getNumber = (options : NumberOptions) : number => {
    if(options.min === undefined) options.min = 0;

    if(options.max === undefined) options.max = 100;

    if(options.totalDecimals === undefined || options.totalDecimals < 0) options.totalDecimals = 0;

    return parseFloat((Math.random() * (options.max!+1 - options.min!) + options.min!).toFixed(options.totalDecimals));
}