import { useState } from "react";
import { Field } from "../../interfaces/Field.interface";
import { FieldType } from "../../utilities/FieldType.model";
import FieldsManager from "../../utilities/FieldsManager";
import { randomString } from "../../utilities/randomString.method";
import "./JsonBuilder.scss";
import JsonBuilderField from "./JsonBuilderField/JsonBuilderField";
import { GenerationType } from "../../utilities/generationType.utilities";

export default function JsonBuilder(){
    const [objectTotalFields, setObjectTotalFields] = useState(FieldsManager.fields.length);

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

        setObjectTotalFields(FieldsManager.fields.length);
    }
    
    return (
        <div className="json-builder">
            <JsonBuilderField isHeader={true}></JsonBuilderField>

            <div
                className="json-builder-object"
                style={{
                    display : 'flex',
                }}
            >
                {
                    [...new Array(objectTotalFields)].map((x : any, index : number) => {
                        return <JsonBuilderField field={FieldsManager.fields[index]} key={randomString()}></JsonBuilderField>
                    })
                }
                <button className="json-builder-object-button" onClick={onAddField}>ADD NEW FIELD</button>
            </div>
        </div>
    );
}
