import { Field } from "../interfaces/Field.interface";
import { FieldType } from "../models/FieldType.model";
import { fakeData } from "./fakeData";

export default class FieldsManager{
    static fields : Field[] = [];
    static composedJson = {};
    static jsonMap : Field[] = [];

    static get json(){
        this.jsonMap = [];
        let json : any = {};
        let depth = 1;

        if(FieldsManager.fields.length > 0){
            this.setRecursivePath(FieldsManager.fields, []);
        }

        while(depth <= this.jsonMap.length){
            this.jsonMap.filter((field : Field) => {
                return field.path.length === depth;
            }).forEach((field : Field) => {
                json = this.setJsonValueByPath(json, field.path, field);
            });

            depth++;
        }

        return json;
    }

    static getChildrenType(fieldType : FieldType){
        if(fieldType === FieldType.ARRAY) return [];

        return {};
    }

    static getParent(parentId : string) : Field{
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
                if(this.getParent(field.parentId!).type === FieldType.ARRAY){
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
                if(this.getParent(field.parentId!).type === FieldType.ARRAY){
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