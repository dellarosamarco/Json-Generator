import CreditCardGenerator, { CreditCardVendor } from '../../../CreditCardGenerator';

export const getVisaCard = () : number => {
    return parseInt(CreditCardGenerator.generateSingle(CreditCardVendor.VISA));
}

export const getMastercard = () : number => {
    return parseInt(CreditCardGenerator.generateSingle(CreditCardVendor.MasterCard));
}