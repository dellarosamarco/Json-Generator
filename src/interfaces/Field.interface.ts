import { FieldType } from "../utilities/FieldType.model";

export interface Field{
    id? : string;
    parentId? : string;
    fieldName? : string;
    type? : FieldType;
    generationType? : string;
    value? : string;
    children? : Field[];
    path: string[];
    fieldOpened? : boolean;
}