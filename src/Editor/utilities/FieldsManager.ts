import { Field } from "../interfaces/Field.interface";

export default class FieldsManager{
    static fields : Field[] = [];

    static editField(field : Field) : void{
        const oldField = this.fields.filter((_field : Field) => {
            return _field.id === field.id
        })[0];

        if(oldField !== undefined){
            this.fields[this.fields.indexOf(oldField)] = field;
        }
    }
}