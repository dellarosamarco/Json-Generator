import { Field } from "../interfaces/Field.interface";

export default class FieldsManager{
    static fields : Field[] = [];

    // static get json(){
    //     let json = {} as any;

    //     this.fields.forEach((field : Field) => {
    //         json[field.fieldName!] = field.value
    //     });


    //     this.fields.forEach((field : Field) => {

    //         let finished = false;
    //         let currentField = field;
    //         let tempJson;

    //         while(!finished){
    //             if(currentField.children !== undefined){
    //                 json[currentField.fieldName!] = {};
    //             }
    //         }
    //     });

    //     return json;
    // }
}