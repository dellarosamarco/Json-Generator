import { Field } from "../interfaces/Field.interface";
import { FieldType } from "./FieldType.model";
import { GenerationType } from "./generationType.utilities";

export const fakeData : Field[] = [
    {
        id: 'name', 
        fieldName: 'Name', 
        value: '', 
        type: FieldType.STRING,
        generationType : GenerationType.RANDOM_NAME,
        path: [],
        options : {},
    },
    {
        id: 'children', 
        fieldName: 'Children', 
        value: '', 
        type: FieldType.ARRAY,
        generationType : GenerationType.CUSTOM_VALUE,
        path: [],
        options : {},
        children : [
            ...Array.from({length:10}).map((element : any, index : number) => {
                return {
                    id: 'Child' + index.toString(), 
                    fieldName: 'Child' + index.toString(), 
                    parentId: 'children',
                    value: '', 
                    type: FieldType.OBJECT,
                    generationType : GenerationType.RANDOM_NAME,
                    path: [],
                    options : {},
                    children : [
                        {
                            id: 'Child' + index.toString() + "name", 
                            fieldName: 'Name', 
                            parentId:'Child' + index.toString(), 
                            value: '', 
                            type: FieldType.STRING,
                            generationType : GenerationType.RANDOM_NAME,
                            path: [],
                            options : {},
                        }
                    ]
                } as Field
            })
        ]
    },
    {
        id: 'date', 
        fieldName: 'date', 
        value: '', 
        type: FieldType.DATE,
        generationType : GenerationType.RANDOM_DATE,
        path: [],
        options : {},
    },
    {
        id: 'object', 
        fieldName: 'object', 
        value: '', 
        type: FieldType.OBJECT,
        generationType : GenerationType.CUSTOM_VALUE,
        path: [],
        options : {},
        children : [      
            {
                id: 'date12', 
                fieldName: 'date', 
                parentId : 'object',
                value: '', 
                type: FieldType.DATE,
                generationType : GenerationType.RANDOM_DATE,
                path: [],
                options : {},
            },
            {
                id: 'city', 
                fieldName: 'city', 
                parentId : 'object',
                value: '', 
                type: FieldType.STRING,
                generationType : GenerationType.RANDOM_CITY,
                path: [],
                options : {},
            },
            {
                id: 'user', 
                fieldName: 'user', 
                parentId : 'object',
                value: '', 
                type: FieldType.OBJECT,
                generationType : GenerationType.CUSTOM_VALUE,
                path: [],
                options : {},
                children : [
                    {
                        id: 'date12asd', 
                        fieldName: 'date', 
                        parentId : 'user',
                        value: '', 
                        type: FieldType.DATE,
                        generationType : GenerationType.RANDOM_DATE,
                        path: [],
                        options : {},
                    },
                    {
                        id: 'name12312', 
                        fieldName: 'name', 
                        parentId : 'user',
                        value: '', 
                        type: FieldType.STRING,
                        generationType : GenerationType.RANDOM_NAME,
                        path: [],
                        options : {},
                    },
                ]
            },
        ]
    },
];