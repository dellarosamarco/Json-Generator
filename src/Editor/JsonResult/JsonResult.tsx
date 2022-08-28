import FieldsManager from "../../utilities/FieldsManager";
import "./JsonResult.scss";

const prefix = "json-result";

export default function JsonResult(props : any){
    return (
        <div className="json-result">
            <div className="json-result__header">
                <button onClick={() => props.generateJson()}>GENERATE</button>
            </div>
            <pre className="json-result-json">{JSON.stringify(FieldsManager.json, undefined, 2)}</pre>
        </div>
    )
}