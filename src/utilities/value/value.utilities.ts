import { Field } from "../../interfaces/Field.interface";
import { GenerationType } from "../generationType.utilities"
import { getLastName } from "./data/lastname";
import { getName } from "./data/names";

export const getFieldValue = (field : Field) : string => {
    switch(field.generationType){
        case GenerationType.CUSTOM_VALUE : return field.value!;
        case GenerationType.RANDOM_NAME : return getName();
        case GenerationType.RANDOM_LAST_NAME : return getLastName();
        default : return "";
    }
}