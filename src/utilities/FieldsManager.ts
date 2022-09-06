import { Field } from "../interfaces/Field.interface";
import { FieldType } from "./FieldType.model";
import { fakeData } from "./fakeData";
import { getFieldValue } from "./value/value.utilities";

export default class FieldsManager{
    static fields : Field[] = fakeData;
    static composedJson = {};
    static repeat : number = 1;
    static toggle : boolean = true;

    private static _jsonMap : Field[] = [];

    static get jsonMap() : Field[]{
        this._jsonMap = [];

        if(FieldsManager.fields.length > 0){
            this.setRecursivePath(FieldsManager.fields, []);
        }

        return this._jsonMap;
    }

    static get json(){
        const json : any = [];
        const map = this.jsonMap;

        for(let x = 0; x < map.length; x++){
            for(let y = 0; y < map.length; y++){
                if(x !== y && map[x].fieldName === map[y].fieldName && map[x].parentId === map[y].parentId){
                    if(map[x].parentId && this.getParentById(map[x].parentId!).type === FieldType.ARRAY) continue;
                    return { "ERROR" : "Duplicated field name" }
                }

                if(map[x].fieldName === "") return { "ERROR" : "Empty field name" }
            }
        }

        for(let n=0;n<this.repeat;n++){
            let partialJson : any = {};
            let depth = 1;

            while(depth <= map.length){
                map.filter((field : Field) => {
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

        let tmpPartialJson : any = paritalJson[path[0]];
        
        for(let n=1; n<path.length; n++){
            if(n === path.length - 1){
                if(this.getParentById(field.parentId!).type === FieldType.ARRAY){
                    if(field.type === FieldType.OBJECT){
                        tmpPartialJson.push({});
                    }
                    else{
                        tmpPartialJson.push({ [path[n]] : field.children ? [] : getFieldValue(field) });
                    }
                }
                else if(this.getParentById(this.getParentById(field.parentId!)?.parentId!)?.type === FieldType.ARRAY){
                    // PARENT CHILDREN COUNTER MAPPING WITH PARENT OF PARENT ID??????
                    console.log(field.index)
                    tmpPartialJson[this.getParentById(field.parentId!).index!][path[n]] = field.children ? this.getChildrenType(field.type!) : getFieldValue(field);
                }
                else{
                    tmpPartialJson[path[n]] = field.children ? this.getChildrenType(field.type!) : getFieldValue(field);
                }
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
            this._jsonMap.push(field);

            if(field.children !== undefined)
            {
                this.setRecursivePath(field.children, field.path!);
            }
        }); 
    }

    static removeField(field : Field){
        if(field.parentId === undefined){
            FieldsManager.fields.splice(
                FieldsManager.fields.indexOf(
                    FieldsManager.fields.filter((_field : Field) => {
                        return _field.id === field.id;
                    })[0]
                )
            ,1);
        }
        else{
            const path : string[] = this.jsonMap.filter((_field : Field) => { return _field.id === field.id })[0].path;

            let fieldReference : Field = FieldsManager.fields.filter((_field : Field) => { return _field.fieldName === path[0]})[0];;

            for(let n=1;n<path.length-1;n++){
                fieldReference = fieldReference.children?.filter((_field : Field) => { return _field.fieldName === path[n]})[0]!;
            }

            fieldReference.children?.splice(
                fieldReference.children.indexOf(
                    fieldReference.children.filter((_field : Field) => {
                        return _field.fieldName === path[path.length-1];
                    })[0]
                )
            ,1);
        }
    }
}