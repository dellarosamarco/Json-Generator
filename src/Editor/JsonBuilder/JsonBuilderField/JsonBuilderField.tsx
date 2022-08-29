import { useState } from "react";
import { Field } from "../../../interfaces/Field.interface";
import { Header } from "../../../interfaces/Header.interface";
import { FieldType, FieldTypeInterface, fieldTypes } from "../../../utilities/FieldType.model";
import { GenerationType, GenerationTypeInterface, getGenerationType } from "../../../utilities/generationType.utilities";
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

    function onEditFieldGenerationType(event : any){
        props.field!.generationType = event.target.value;
        forceState(!state);
    }

    function onToggleObject(){
        props.field!.fieldOpened = props.field?.fieldOpened ? false : true;
        forceState(!state);
    }

    function onAddField(){
        props.field!.children?.push({
            id : randomString(),
            fieldName : '',
            value : '',
            type : FieldType.STRING,
            parentId : props.field?.id,
            generationType : GenerationType.CUSTOM_VALUE,
            path : [],
            children : []
        } as Field);

        forceState(!state);
    }

    const rowPrefix = props.isHeader ? "json-builder-row__header" : "json-builder-row__field";
    const cellPrefix = rowPrefix + "__cell";
    const cellTitlePrefix = cellPrefix + "-title";

    function renderHeader(){
        return (
            headers.titles.map((title : string) => {
                return (
                    <div className={cellPrefix} key={title}>
                        <h1 className={cellTitlePrefix}>{title}</h1>
                    </div>
                )
            })
        )
    }

    function renderRows(){

        function renderFieldNameCell(){
            return (
                <div className={cellPrefix}>
                    <input value={props.field!.fieldName} onChange={(e) => onEditFieldName(e)}></input>
                </div>
            );
        }

        function renderFieldTypeCell(){
            return (
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
            );
        }

        function renderFieldGenerationTypeCell(){
            return(
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
            );
        }

        function renderFieldValue(){
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
                        : <button className="json-builder-row-button" onClick={onToggleObject}>{ props.field?.fieldOpened ? 'CLOSE OBJECT' : 'OPEN OBJECT'}</button>
                    }
                </div>
            );
        }

        return (
            (
                <>
                    {renderFieldNameCell()}
                    {renderFieldTypeCell()}
                    {renderFieldGenerationTypeCell()}
                    {renderFieldValue()}
                </>
            )
        )
    }

    function renderChildren(){
        return(
            <div
                className="json-builder-object"
                style={{
                    display : props.field?.fieldOpened ? 'flex' : 'none',
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
        );
    }

    return (
        <>
            <div className={"json-builder-row " + rowPrefix}>
                { props.isHeader ? renderHeader() : renderRows() }
            </div>

            { !props.isHeader && isArrayOrObject() ? renderChildren() : <></> }
        </>
    );
}