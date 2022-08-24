export interface Field{
    id? : string;
    fieldName? : string;
    type? : string;
    generationType? : string;
    value? : string;
    children? : Field[];
}