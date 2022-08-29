import { FieldType } from "../utilities/FieldType.model";
import { GenerationType } from "../utilities/generationType.utilities";

export interface Field{
    id? : string;
    parentId? : string;
    fieldName? : string;
    type? : FieldType;
    generationType : GenerationType;
    value? : string;
    children? : Field[];
    path: string[];
    fieldOpened? : boolean;
}