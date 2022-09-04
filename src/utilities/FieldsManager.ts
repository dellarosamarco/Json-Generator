import { Field } from "../interfaces/Field.interface";
import { FieldType } from "./FieldType.model";
import { fakeData, fakeData2 } from "./fakeData";
import { getFieldValue } from "./value/value.utilities";

export default class FieldsManager{
    static fields : Field[] = [];
    static composedJson = {};
    static jsonMap : Field[] = [];
    static repeat : number = 1;
    static toggle : boolean = true;

    static get json(){
        this.jsonMap = [];
        const json : any = [];

        if(FieldsManager.fields.length > 0){
            this.setRecursivePath(FieldsManager.fields, []);
        }

        for(let x = 0; x < this.jsonMap.length; x++){
            for(let y = 0; y < this.jsonMap.length; y++){
                if(
                    x !== y &&
                    this.jsonMap[x].fieldName === this.jsonMap[y].fieldName && 
                    this.jsonMap[x].parentId === this.jsonMap[y].parentId 
                ){
                    if(this.jsonMap[x].parentId && this.getParentById(this.jsonMap[x].parentId!).type === FieldType.ARRAY){
                        continue;
                    }

                    return {
                        "ERROR" : "Duplicated field name"
                    }
                }

                if(this.jsonMap[x].fieldName === ""){
                    return {
                        "ERROR" : "Empty field name"
                    }
                }
            }
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
                    if(field.type === FieldType.OBJECT){
                        tmpPartialJson.push(this.getChildrenType(field.type!));
                    }
                    else{
                        tmpPartialJson.push(field.children ? { [path[n]] : this.getChildrenType(field.type!)} : { [path[n]] : getFieldValue(field)});
                    }
                }
                else{
                    const parent = this.getParentById(field.parentId!);
                    const parentOfParent = this.getParentById(parent.parentId!);

                    if(parent && parent.type === FieldType.OBJECT && parentOfParent && parentOfParent.type === FieldType.ARRAY){
                        tmpPartialJson[tmpPartialJson.length-1][path[n]] = field.children ? this.getChildrenType(field.type!) : getFieldValue(field);
                    }
                    else{
                        tmpPartialJson[path[n]] = field.children ? this.getChildrenType(field.type!) : getFieldValue(field);
                    }
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
            this.jsonMap = [];
            this.setRecursivePath(FieldsManager.fields, []);

            const path : string[] = this.jsonMap.filter((_field : Field) => { return _field.id === field.id })[0].path;

            let fieldReference : Field;

            fieldReference = FieldsManager.fields.filter((_field : Field) => { return _field.fieldName === path[0]})[0];

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