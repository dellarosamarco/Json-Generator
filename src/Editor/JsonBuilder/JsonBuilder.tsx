import { useState } from "react";
import FieldsManager from "../utilities/FieldsManager";
import { randomString } from "../utilities/randomString.method";
import "./JsonBuilder.scss";
import JsonBuilderField from "./JsonBuilderField/JsonBuilderField";

export default function JsonBuilder(){
    const [objectTotalFields, setObjectTotalFields] = useState(0);

    function onAddField(){
        setObjectTotalFields(objectTotalFields+1);
    }

    function getFields(){
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
                    [...new Array(objectTotalFields)].map(() => {
                        return <JsonBuilderField key={randomString()}></JsonBuilderField>
                    })
                }
                <button className="json-builder-object-button" onClick={onAddField}>ADD NEW FIELD</button>
            </div>
            <button onClick={getFields}>ciao</button>
        </div>
    );
}