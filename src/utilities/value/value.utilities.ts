import { Field } from "../../interfaces/Field.interface";
import { GenerationType } from "../generationType.utilities"
import { ChoiceOptions, getChoice } from "./data/choices";
import { getCity } from "./data/cities";
import { getMastercard, getVisaCard } from "./data/creditCard";
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
        case GenerationType.RANDOM_CHOICE : return getChoice(field.options! as ChoiceOptions);
        case GenerationType.RANDOM_CITY : return getCity();
        case GenerationType.RANDOM_VISA_CREDIT_CARD_NUMBER : return getVisaCard();
        case GenerationType.RANDOM_MASTERCARD_CREDIT_CARD_NUMBER : return getMastercard();
        default : return "";
    }
}