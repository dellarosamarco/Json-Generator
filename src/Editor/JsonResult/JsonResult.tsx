import FieldsManager from "../../utilities/FieldsManager";
import "./JsonResult.scss";

const prefix = "json-result";

export default function JsonResult(props : any){

    function onEditJsonRepeat(event : any){
        FieldsManager.repeat = event.target.value;
    }

    function onDownload(){
        props.generateJson();

        const blob = new Blob([JSON.stringify(FieldsManager.json)], { type: "text/json" });
        const link = document.createElement("a");
    
        link.download = "data.json";
        link.href = window.URL.createObjectURL(blob);
        link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");
    
        const evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
        });
    
        link.dispatchEvent(evt);
        link.remove()
    }

    return (
        <div className={prefix}>
            <div className={prefix + "__header"}>
                <div className={prefix + "__header-repeat-container"}>
                    <h1>Repeat</h1>
                    <input type="number" min="0" defaultValue="1" onChange={(e) =>  onEditJsonRepeat(e)}></input>
                </div>

                <div>
                    <button onClick={onDownload}>DOWNLOAD</button>
                    <button onClick={() => props.generateJson()}>GENERATE</button>
                </div>  
            </div>

            <div className={prefix + "__body"}>
                <pre>{JSON.stringify(FieldsManager.json, undefined, 2)}</pre>
            </div>
        </div>
    )
}