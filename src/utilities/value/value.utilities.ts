import { Field } from "../../interfaces/Field.interface";
import { GenerationType } from "../generationType.utilities"
import { getLastName } from "./data/lastname";
import { getName } from "./data/names";
import { getNumber } from "./data/number";

export const getFieldValue = (field : Field) : string | number | boolean => {
    switch(field.generationType){
        case GenerationType.CUSTOM_VALUE : return field.value!;
        case GenerationType.RANDOM_NAME : return getName();
        case GenerationType.RANDOM_LAST_NAME : return getLastName();
        case GenerationType.RANDOM_NUMBER : return getNumber(field.options!);
        case GenerationType.RANDOM_BOOLEAN : return Math.random() > 0.5;
        default : return "";
    }
}