export interface Field{
    id? : string;
    parentId? : string;
    fieldName? : string;
    type? : string;
    generationType? : string;
    value? : string;
    children? : Field[];
    path: string[];
}