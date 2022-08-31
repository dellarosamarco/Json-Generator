import { Field } from "../../interfaces/Field.interface";
import { GenerationType } from "../generationType.utilities"
import { DateOptions, getDate } from "./data/date";
import { getLastName } from "./data/lastname";
import { getName } from "./data/names";
import { getNumber, NumberOptions } from "./data/number";

export const getFieldValue = (field : Field) : string | number | boolean => {
    switch(field.generationType){
        case GenerationType.CUSTOM_VALUE : return field.value!;
        case GenerationType.RANDOM_NAME : return getName();
        case GenerationType.RANDOM_LAST_NAME : return getLastName();
        case GenerationType.RANDOM_NUMBER : return getNumber(field.options! as NumberOptions);
        case GenerationType.RANDOM_BOOLEAN : return Math.random() > 0.5;
        case GenerationType.RANDOM_DATE : return getDate(field.options! as DateOptions);
        default : return "";
    }
}