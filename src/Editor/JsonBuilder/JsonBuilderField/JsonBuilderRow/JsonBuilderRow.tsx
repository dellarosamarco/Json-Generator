import { FieldType, FieldTypeInterface, fieldTypes } from "../../../../utilities/FieldType.model";
import { GenerationType, GenerationTypeInterface, getGenerationType, haveOptions } from "../../../../utilities/generationType.utilities";

export default function JsonBuilderRow(props:any){

    const rowPrefix = props.isHeader ? "json-builder-row__header" : "json-builder-row__field";
    const cellPrefix = rowPrefix + "__cell";

    const isArrayOrObject = () => {
        return (props.field!.type === FieldType.ARRAY || props.field!.type === FieldType.OBJECT);
    }

    function onEditFieldName(event : any){
        props.field!.fieldName = event.target.value;
        props.updateState();
    }

    function onEditFieldValue(event : any){
        props.field!.value = event.target.value;
        props.updateState();
    }

    function onEditFieldType(event : any){
        if(event.target.value === "Array" || event.target.value === "Object"){
            if(props.field!.children === undefined){
                props.field!.children = [];
            }
        }

        props.field!.type = event.target.value;
        props.updateState();
    }

    function onEditFieldGenerationType(event : any){
        props.field!.generationType = event.target.value;
        props.updateState();
    }

    function renderRows(){
        function renderFieldValueCell(){
            function render(){
                return props.field?.generationType === GenerationType.CUSTOM_VALUE ? 
                <input value={props.field!.value} onChange={(e) => onEditFieldValue(e)}></input> : 
                <></>
            }

            return(
                <div className={cellPrefix}>
                    {
                        (!isArrayOrObject()) ? 
                        (render()) 
                        : <button className="json-builder-row-button" onClick={props.onToggleObject}>{ props.field?.fieldOpened ? 'CLOSE OBJECT' : 'OPEN OBJECT'}</button>
                    }
                </div>
            );
        }

        return (
            (
                <>
                    {/* FIELD NAME */}
                    <div className={cellPrefix}>
                        <input value={props.field!.fieldName} onChange={(e) => onEditFieldName(e)}></input>
                    </div>

                    {/* FIELD TYPE */}
                    <div className={cellPrefix}>
                        <select onChange={(e) => onEditFieldType(e)} defaultValue={props.field?.type}>
                            {
                                fieldTypes.map((fieldType : FieldTypeInterface) => {
                                    return (
                                        <option key={fieldType.fieldType} value={fieldType.fieldType}>{fieldType.fieldName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>


                    {/* GENERATION TYPE */}
                    <div className={cellPrefix}>
                        {
                            (!isArrayOrObject()) ? (
                                <select onChange={(e) => onEditFieldGenerationType(e)} defaultValue={props.field?.generationType}>
                                    {
                                        getGenerationType(props.field?.type!).map((generationTypeInterface : GenerationTypeInterface) => {
                                            return (
                                                <option key={generationTypeInterface.name} value={generationTypeInterface.type}>{generationTypeInterface.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            ) : <></>
                        }
                    </div>

                    {renderFieldValueCell()}

                    {/* OPTIONS */}
                    <div className={cellPrefix}>
                        {
                            (
                                isArrayOrObject() ? <></> :
                                    haveOptions(props.field?.generationType!) ? 
                                        <button 
                                            className="json-builder-row-button" 
                                            onClick={props.onToggleOptionsModal}>
                                                SET OPTIONS
                                        </button> : <></>
                            )
                        }
                    </div>
                </>
            )
        )
    }

    return renderRows();
}