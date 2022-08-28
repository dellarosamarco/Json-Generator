import { Field } from "../interfaces/Field.interface";
import { FieldType } from "../models/FieldType.model";
import { fakeData, fakeData2 } from "./fakeData";

export default class FieldsManager{
    static fields : Field[] = fakeData;
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
            paritalJson[path[0]] = field.children?.length! > 0 ? this.getChildrenType(field.type!) : field.value;
            return paritalJson;
        }

        let tmpPartialJson : any;
        
        for(let n=0; n<path.length; n++){
            if(n == path.length - 1){
                if(this.getParentById(field.parentId!).type === FieldType.ARRAY){
                    tmpPartialJson.push(field.children?.length! > 0 ? { [path[n]] : this.getChildrenType(field.type!)} : { [path[n]] : field.value});
                }
                else{
                    tmpPartialJson[path[n]] = field.children?.length! > 0 ? this.getChildrenType(field.type!) : field.value;
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