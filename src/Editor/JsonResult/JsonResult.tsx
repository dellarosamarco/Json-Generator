import FieldsManager from "../../utilities/FieldsManager";
import "./JsonResult.scss";

export default function JsonResult(props : any){
    return (
        <div className="json-result">
            <pre className="json-result-json">{JSON.stringify(FieldsManager.json, undefined, 2)}</pre>
        </div>
    )
}