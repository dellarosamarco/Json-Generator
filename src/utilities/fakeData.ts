import { Field } from "../interfaces/Field.interface";

export const fakeData : Field[] = [
    {
        id: 'LEVEL_1A', 
        fieldName: 'LEVEL_1A', 
        value: 'b1', 
        type: 'Object',
        path: [],
        children : [
            {
                id: 'LEVEL_2A', 
                parentId : 'LEVEL_1A',
                fieldName: 'LEVEL_2A', 
                value: '2A', 
                type: '',
                path: [],
                children : [
                    {
                        id: 'LEVEL_3A', 
                        parentId : 'LEVEL_1A',
                        fieldName: 'LEVEL_3A', 
                        value: '3A', 
                        type: '',
                        path: [],
                        children : [
                            {
                                id: 'LEVEL_41', 
                                parentId : 'LEVEL_1A',
                                fieldName: 'LEVEL_4A', 
                                value: '4A', 
                                type: '',
                                path: [],
                            }
                        ]
                    }
                ]
            },                
            {
                id: 'LEVEL_2B', 
                parentId : 'LEVEL_1A',
                fieldName: 'LEVEL_2B', 
                value: '2B', 
                type: '',
                path: [],
            },                
            {
                id: 'LEVEL_2C', 
                parentId : 'LEVEL_1A',
                fieldName: 'LEVEL_2C', 
                value: '2C', 
                type: '',
                path: [],
            }
        ]
    },
    {
        id: 'LEVEL_1B', 
        fieldName: 'LEVEL_1B', 
        value: 'b1', 
        type: 'Object',
        path: [],
        children : [
            {
                id: 'LEVEL_2A', 
                parentId : 'LEVEL_1A',
                fieldName: 'LEVEL_2A', 
                value: '2A 2', 
                type: '',
                path: [],
            },                
            {
                id: 'LEVEL_2B', 
                parentId : 'LEVEL_1A',
                fieldName: 'LEVEL_2B', 
                value: '2B 2', 
                type: '',
                path: [],
            },                
            {
                id: 'LEVEL_2C', 
                parentId : 'LEVEL_1A',
                fieldName: 'LEVEL_2C', 
                value: '2C 2', 
                type: '',
                path: [],
            }
        ]
    }
];