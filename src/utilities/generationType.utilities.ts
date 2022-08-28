import { FieldType } from "./FieldType.model";

export enum GenerationType{
    CUSTOM_VALUE,
    RANDOM_NAME,
    RANDOM_LAST_NAME,
    RANDOM_AGE,
    RANDOM_BOOLEAN
}

export interface GenerationTypeInterface{
    name : string;
    type : GenerationType;
}

export const stringGenerationTypes : GenerationTypeInterface[] = [
    {
        "name" : "Custom value",
        "type" : GenerationType.CUSTOM_VALUE
    },
    {
        "name" : "Random name",
        "type" : GenerationType.RANDOM_NAME
    },
    {
        "name" : "Random last name",
        "type" : GenerationType.RANDOM_LAST_NAME
    },
];

export const numberGenerationTypes : GenerationTypeInterface[] = [
    {
        "name" : "Custom value",
        "type" : GenerationType.CUSTOM_VALUE
    },
    {
        "name" : "Random age",
        "type" : GenerationType.RANDOM_AGE
    }
];

export const booleanGenerationTypes : GenerationTypeInterface[] = [
    {
        "name" : "Custom value",
        "type" : GenerationType.CUSTOM_VALUE
    },
    {
        "name" : "Random boolean",
        "type" : GenerationType.RANDOM_BOOLEAN
    }
];

export const getGenerationType = (fieldType : FieldType) : GenerationTypeInterface[] => {
    return (
        fieldType === FieldType.STRING ? stringGenerationTypes :
        fieldType === FieldType.NUMBER ? numberGenerationTypes : 
        fieldType === FieldType.BOOLEAN ? booleanGenerationTypes : []
    );
}
