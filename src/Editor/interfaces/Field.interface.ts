import { FieldTypeInterface } from "../models/FieldType.model";

export interface Field{
    fieldName? : string;
    type? : string;
    generationType? : string;
    value? : string;
}