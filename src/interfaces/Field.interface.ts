import { FieldType } from "../utilities/FieldType.model";
import { GenerationType } from "../utilities/generationType.utilities";
import { DateOptions } from "../utilities/value/data/date";
import { NumberOptions } from "../utilities/value/data/number";

export interface Field{
    id? : string;
    parentId? : string;
    fieldName? : string;
    type? : FieldType;
    generationType : GenerationType;
    value? : string | boolean;
    children? : Field[];
    path: string[];
    fieldOpened? : boolean;
    options : NumberOptions | DateOptions;
}