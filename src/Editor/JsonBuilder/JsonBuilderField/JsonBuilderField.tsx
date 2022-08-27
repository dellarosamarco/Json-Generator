import { useState } from "react";
import { Field } from "../../../interfaces/Field.interface";
import { Header } from "../../../interfaces/Header.interface";
import { FieldType, FieldTypeInterface, fieldTypes } from "../../../models/FieldType.model";
import { randomString } from "../../../utilities/randomString.method";

const headers : Header = {
    titles : ['FIELD NAME', 'TYPE','GENERATION TYPE', 'VALUE']
}

interface JsonBuilderFieldProps{
    isHeader? : boolean;
    field? : Field;
}

export default function JsonBuilderField(props : JsonBuilderFieldProps){

    const [state, forceState] = useState(false);

    const [objectOpened, setObjectOpened] = useState(false);

    const isArrayOrObject = () => {
        return (props.field!.type === FieldType.ARRAY || props.field!.type === FieldType.OBJECT);
    }

    function onEditFieldName(event : any){
        props.field!.fieldName = event.target.value;
        forceState(!state);
    }

    function onEditFieldValue(event : any){
        props.field!.value = event.target.value;
        forceState(!state);
    }

    function onEditFieldType(event : any){

        if(event.target.value === "Array" || event.target.value === "Object"){
            if(props.field!.children === undefined){
                props.field!.children = [];
            }
        }

        props.field!.type = event.target.value;
        forceState(!state);
    }

    function onToggleObject(){
        setObjectOpened(!objectOpened);
    }

    function onAddField(){
        props.field!.children?.push({
            id : randomString(),
            fieldName : '',
            value : '',
            type : '',
            parentId : props.field?.id
        } as Field);

        forceState(!state);
    }

    const rowPrefix = props.isHeader ? "json-builder-row__header" : "json-builder-row__field";
    const cellPrefix = rowPrefix + "__cell";
    const cellTitlePrefix = cellPrefix + "-title";

    return (
        <>
            <div className={"json-builder-row " + rowPrefix}>
                {          
                    props.isHeader ? headers.titles.map((title : string) => {
                        return (
                            <div className={cellPrefix} key={title}>
                                <h1 className={cellTitlePrefix}>{title}</h1>
                            </div>
                        )
                    }) : (
                        <>
                            <div className={cellPrefix}>
                                <input value={props.field!.fieldName} onChange={(e) => onEditFieldName(e)}></input>
                            </div>

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
                            
                            <div className={cellPrefix}>
                                {
                                    (!isArrayOrObject()) ? (<select></select>) : <></>
                                }
                            </div>

                            <div className={cellPrefix}>
                                {
                                    (!isArrayOrObject()) ? 
                                    (<input value={props.field!.value} onChange={(e) => onEditFieldValue(e)}></input>) 
                                    : <button className="json-builder-row-button" onClick={onToggleObject}>{ objectOpened ? 'CLOSE OBJECT' : 'OPEN OBJECT'}</button>
                                }
                            </div>
                        </>
                    )
                }
            </div>

            {
                !props.isHeader && isArrayOrObject() ? 
                <div
                    className="json-builder-object"
                    style={{
                        display : objectOpened ? 'flex' : 'none',
                        backgroundColor: 'var(--tertiary-color)'
                    }}
                >
                    <button className="json-builder-object-button" onClick={onAddField}>ADD NEW FIELD</button>
                    {
                        [...new Array(props.field!.children?.length)].map((x : any, index : number) => {
                            return <JsonBuilderField field={props.field!.children![index]} key={randomString()}></JsonBuilderField>
                        })
                    }
                </div>
                : <></>
            }
        </>
    );
}