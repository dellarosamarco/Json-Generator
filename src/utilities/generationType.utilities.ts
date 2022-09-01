import { FieldType } from "./FieldType.model";

export enum GenerationType{
    CUSTOM_VALUE = "Custom value",
    RANDOM_NAME = "Random name",
    RANDOM_LAST_NAME = "Random last name",
    RANDOM_NUMBER = "Random number",
    RANDOM_BOOLEAN = "Random boolean",
    RANDOM_DATE = "Random date",
    RANDOM_CHOICE = "Random choice",
    RANDOM_CITY = "Random city",
    RANDOM_VISA_CREDIT_CARD_NUMBER = "Random VISA Credit Card Number",
    RANDOM_MASTERCARD_CREDIT_CARD_NUMBER = "Random Mastercard Credit Card Number"
}

export interface GenerationTypeInterface{
    name : string;
    type : GenerationType;
}

export const stringGenerationTypes : GenerationTypeInterface[] = [
    {
        "name" : GenerationType.CUSTOM_VALUE.toString(),
        "type" : GenerationType.CUSTOM_VALUE
    },
    {
        "name" : GenerationType.RANDOM_NAME.toString(),
        "type" : GenerationType.RANDOM_NAME
    },
    {
        "name" : GenerationType.RANDOM_LAST_NAME.toString(),
        "type" : GenerationType.RANDOM_LAST_NAME
    },
    {
        "name" : GenerationType.RANDOM_CHOICE.toString(),
        "type" : GenerationType.RANDOM_CHOICE
    },
    {
        "name" : GenerationType.RANDOM_CITY.toString(),
        "type" : GenerationType.RANDOM_CITY
    }
];

export const dateGenerationTypes : GenerationTypeInterface[] = [
    {
        "name" : GenerationType.CUSTOM_VALUE.toString(),
        "type" : GenerationType.CUSTOM_VALUE
    },
    {
        "name" : GenerationType.RANDOM_DATE.toString(),
        "type" : GenerationType.RANDOM_DATE
    }
];

export const numberGenerationTypes : GenerationTypeInterface[] = [
    {
        "name" : GenerationType.CUSTOM_VALUE.toString(),
        "type" : GenerationType.CUSTOM_VALUE
    },
    {
        "name" : GenerationType.RANDOM_NUMBER.toString(),
        "type" : GenerationType.RANDOM_NUMBER
    },
    {
        "name" : GenerationType.RANDOM_VISA_CREDIT_CARD_NUMBER.toString(),
        "type" : GenerationType.RANDOM_VISA_CREDIT_CARD_NUMBER
    },
    {
        "name" : GenerationType.RANDOM_MASTERCARD_CREDIT_CARD_NUMBER.toString(),
        "type" : GenerationType.RANDOM_MASTERCARD_CREDIT_CARD_NUMBER
    }
];

export const booleanGenerationTypes : GenerationTypeInterface[] = [
    {
        "name" : GenerationType.CUSTOM_VALUE.toString(),
        "type" : GenerationType.CUSTOM_VALUE
    },
    {
        "name" : GenerationType.RANDOM_BOOLEAN.toString(),
        "type" : GenerationType.RANDOM_BOOLEAN
    }
];

export const getGenerationType = (fieldType : FieldType) : GenerationTypeInterface[] => {
    return (
        fieldType === FieldType.STRING ? stringGenerationTypes :
        fieldType === FieldType.DATE ? dateGenerationTypes :
        fieldType === FieldType.NUMBER ? numberGenerationTypes : 
        fieldType === FieldType.BOOLEAN ? booleanGenerationTypes : []
    );
}

export const haveOptions = (generationType : GenerationType) => {
    if(
        generationType === GenerationType.RANDOM_NUMBER ||
        generationType === GenerationType.RANDOM_DATE ||
        generationType === GenerationType.RANDOM_CHOICE
    ){
        return true;
    }

    return false;
}

