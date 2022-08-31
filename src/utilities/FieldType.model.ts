export enum FieldType{
    STRING = "String",
    DATE = "Date",
    NUMBER = "Number",
    BOOLEAN = "Boolean",
    ARRAY = "Array",
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
        fieldType : FieldType.DATE,
        fieldName : 'Date'
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
        fieldType : FieldType.ARRAY,
        fieldName : 'Array'
    },
    {
        fieldType : FieldType.OBJECT,
        fieldName : 'Object'
    }
]