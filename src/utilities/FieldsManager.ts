import { Field } from "../interfaces/Field.interface";
import { FieldType } from "./FieldType.model";
import { fakeData, fakeData2 } from "./fakeData";
import { getFieldValue } from "./value/value.utilities";

export default class FieldsManager{
    static fields : Field[] = [];
    static composedJson = {};
    static jsonMap : Field[] = [];
    static repeat : number = 1;

    static get json(){
        this.jsonMap = [];
        const json : any = [];

        if(FieldsManager.fields.length > 0){
            this.setRecursivePath(FieldsManager.fields, []);
        }

        for(let n=0;n<this.repeat;n++){
            let partialJson : any = {};
            let depth = 1;

            while(depth <= this.jsonMap.length){
                this.jsonMap.filter((field : Field) => {
                    return field.path.length === depth;
                }).forEach((field : Field) => {
                    partialJson = this.setJsonValueByPath(partialJson, field.path, field);
                });
    
                depth++;
            }

            json.push(partialJson);
        }

        return json;
    }

    static getChildrenType(fieldType : FieldType){
        if(fieldType === FieldType.ARRAY) return [];

        return {};
    }

    static getParentById(parentId : string) : Field{
        return this.jsonMap.filter((field : Field) => {
            return field.id === parentId;
        })[0];
    }

    static setJsonValueByPath(json : any, path : string[], field : Field){
        let paritalJson = json;

        if(path.length === 1){
            paritalJson[path[0]] = field.children ? this.getChildrenType(field.type!) : getFieldValue(field);
            return paritalJson;
        }

        let tmpPartialJson : any;
        
        for(let n=0; n<path.length; n++){
            if(n === path.length - 1){
                if(this.getParentById(field.parentId!).type === FieldType.ARRAY){
                    tmpPartialJson.push(field.children ? { [path[n]] : this.getChildrenType(field.type!)} : { [path[n]] : getFieldValue(field)});
                }
                else{
                    tmpPartialJson[path[n]] = field.children ? this.getChildrenType(field.type!) : getFieldValue(field);
                }
            }
            else if(n === 0){
                tmpPartialJson = paritalJson[path[n]];
            }
            else{            
                if(Array.isArray(tmpPartialJson)){
                    tmpPartialJson.forEach((obj : any) => {
                        const keys = Object.keys(obj);
                        if(keys.includes(path[n])){
                            tmpPartialJson = tmpPartialJson[tmpPartialJson.indexOf(obj)][path[n]];
                        }
                    })
                }
                else{
                    tmpPartialJson = tmpPartialJson[path[n]];
                }
            }
        }

        return paritalJson;
    }
            
    static setRecursivePath(fields : Field[], path : string[]){
        fields.forEach((field : Field) => {    
            field.path = [...path, field.fieldName!]
            this.jsonMap.push(field);

            if(field.children !== undefined)
            {
                this.setRecursivePath(field.children, field.path!);
            }
        }); 
    }
}