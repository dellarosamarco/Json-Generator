import { useEffect, useState } from "react";
import { Field } from "../../interfaces/Field.interface";
import { FieldType } from "../../utilities/FieldType.model";
import FieldsManager from "../../utilities/FieldsManager";
import { randomString } from "../../utilities/randomString.method";
import "./JsonBuilder.scss";
import JsonBuilderField from "./JsonBuilderField/JsonBuilderField";
import { GenerationType } from "../../utilities/generationType.utilities";

export default function JsonBuilder(){
    const [totalFields, setTotalFields] = useState(FieldsManager.fields.length);

    function onAddField(){
        FieldsManager.fields.push({
            id : randomString(),
            fieldName : '',
            value : '',
            type : FieldType.STRING,
            generationType : GenerationType.CUSTOM_VALUE,
            path : [],
            options : {}
        } as Field);
        setTotalFields(FieldsManager.fields.length+1);
    }

    if(FieldsManager.toggle){
        window.addEventListener('delete-field',deleteField);
        FieldsManager.toggle = false;
    };

    function deleteField(e : any){
        e.stopPropagation();

        const field = e.detail.field as Field;

        FieldsManager.removeField(field);

        setTotalFields(FieldsManager.fields.length+2); 

        setTimeout(() => {
            setTotalFields(FieldsManager.fields.length+1); 
        });
    }

    return (
        <div className="json-builder">
            <JsonBuilderField isHeader={true}></JsonBuilderField>

            <div 
                className="json-builder-object"
                style={{
                    'overflowY' : 'scroll'
                }}
            >
                {
                    [...Array.from(new Array(totalFields))].map((x : any, index : number) => {
                        return <JsonBuilderField field={FieldsManager.fields[index]} key={randomString()}></JsonBuilderField>
                    })
                }
                <button className="json-builder-object-button" onClick={onAddField}>ADD NEW FIELD</button>
            </div>
        </div>
    );
}
