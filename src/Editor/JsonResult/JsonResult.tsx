import FieldsManager from "../../utilities/FieldsManager";
import "./JsonResult.scss";

const prefix = "json-result";

export default function JsonResult(props : any){

    function onEditJsonRepeat(event : any){
        FieldsManager.repeat = event.target.value;
    }

    return (
        <div className={prefix}>
            <div className={prefix + "__header"}>
                <div className={prefix + "__header-repeat-container"}>
                    <h1>Repeat</h1>
                    <input type="number" min="0" defaultValue="1" onChange={(e) =>  onEditJsonRepeat(e)}></input>
                </div>

                <button onClick={() => props.generateJson()}>GENERATE</button>
            </div>

            <div className={prefix + "__body"}>
                <pre>{JSON.stringify(FieldsManager.json, undefined, 2)}</pre>
            </div>
        </div>
    )
}