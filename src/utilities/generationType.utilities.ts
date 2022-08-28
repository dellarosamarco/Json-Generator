export enum GenerationType{
    CUSTOM_VALUE,
    RANDOM_NAME,
    RANDOM_LAST_NAME,
    RANDOM_AGE
}

export const stringGenerationTypes : GenerationType[] = [
    GenerationType.CUSTOM_VALUE,
    GenerationType.RANDOM_NAME,
    GenerationType.RANDOM_LAST_NAME
]

export const numberGenerationTypes : GenerationType[] = [
    GenerationType.CUSTOM_VALUE,
    GenerationType.RANDOM_AGE,
]

export interface GenerationTypeInterface{
    types : GenerationType[];
}
