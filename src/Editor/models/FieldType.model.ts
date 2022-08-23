export enum FieldType{
    STRING = "String",
    NUMBER = "Number",
    BOOLEAN = "Boolean",
    OBJECT = "Object"
}

export interface FieldTypeInterface{
    fieldType : FieldType;
    fieldName : string;
} 

export const fieldTypes : FieldTypeInterface[] = [
    {
        fieldType : FieldType.STRING,
        fieldName : 'String'
    },    
    {
        fieldType : FieldType.NUMBER,
        fieldName : 'Number'
    },    
    {
        fieldType : FieldType.BOOLEAN,
        fieldName : 'Boolean'
    },    
    {
        fieldType : FieldType.OBJECT,
        fieldName : 'Object'
    },
]