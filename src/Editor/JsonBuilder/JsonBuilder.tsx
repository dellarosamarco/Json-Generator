import { useState } from "react";
import "./JsonBuilder.scss";
import JsonBuilderField from "./JsonBuilderField/JsonBuilderField";

export default function JsonBuilder(){
    const [objectTotalFields, setObjectTotalFields] = useState(0);

    function onAddField(){
        setObjectTotalFields(objectTotalFields+1);
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
                        return <JsonBuilderField></JsonBuilderField>
                    })
                }
                <button className="json-builder-object-button" onClick={onAddField}>ADD NEW FIELD</button>
            </div>
        </div>
    );
}