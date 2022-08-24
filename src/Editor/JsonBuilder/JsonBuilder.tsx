import { useState } from "react";
import { Field } from "../../interfaces/Field.interface";
import FieldsManager from "../../utilities/FieldsManager";
import { randomString } from "../../utilities/randomString.method";
import "./JsonBuilder.scss";
import JsonBuilderField from "./JsonBuilderField/JsonBuilderField";

export default function JsonBuilder(){
    const [objectTotalFields, setObjectTotalFields] = useState(FieldsManager.fields.length);

    function onAddField(){
        FieldsManager.fields.push({
            id : randomString(),
            fieldName : '',
            value : '',
            type : '',
        } as Field);

        setObjectTotalFields(FieldsManager.fields.length);
        console.log(FieldsManager.fields);
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

function defaultField(defaultField: any) {
    throw new Error("Function not implemented.");
}
