import { FieldType } from "../models/FieldType.model";

export interface Field{
    id? : string;
    parentId? : string;
    fieldName? : string;
    type? : FieldType;
    generationType? : string;
    value? : string;
    children? : Field[];
    path: string[];
}