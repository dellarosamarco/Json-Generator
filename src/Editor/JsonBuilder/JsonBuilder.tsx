import "./JsonBuilder.scss";
import JsonBuilderField from "./JsonBuilderField/JsonBuilderField";

export default function JsonBuilder(){
    return (
        <div className="json-builder">
            <JsonBuilderField isHeader={true}></JsonBuilderField>
            <JsonBuilderField isHeader={false}></JsonBuilderField>
        </div>
    );
}