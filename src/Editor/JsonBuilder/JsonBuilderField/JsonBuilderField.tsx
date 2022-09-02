import { useState } from "react";
import { Field } from "../../../interfaces/Field.interface";
import { FieldType } from "../../../utilities/FieldType.model";
import { GenerationType } from "../../../utilities/generationType.utilities";
import { randomString } from "../../../utilities/randomString.method";
import JsonBuilderHeader from "./JsonBuilderHeader/JsonBuilderHeader";
import JsonBuilderRow from "./JsonBuilderRow/JsonBuilderRow";
import OptionModal from "./OptionModal/OptionModal";

interface JsonBuilderFieldProps{
    isHeader? : boolean;
    field? : Field;
}

export default function JsonBuilderField(props : JsonBuilderFieldProps){

    const rowPrefix = props.isHeader ? "json-builder-row__header" : "json-builder-row__field";

    const [state, forceState] = useState(false);

    const [showOptionModal, setShowOptionModal] = useState(false);

    function updateState(){
        forceState(!state);
    }

    function onToggleObject(){
        props.field!.fieldOpened = props.field?.fieldOpened ? false : true;
        updateState();
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
            options : {}
        } as Field);

        updateState();
    }

    function onRemoveField(field : Field){
        console.log(field);
    }

    function onToggleOptionsModal(){
        setShowOptionModal(!showOptionModal);
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
        props.field !== undefined || props.isHeader ? <>
            <div className={"json-builder-row " + rowPrefix}>
                { 
                    props.isHeader ? 
                        <JsonBuilderHeader></JsonBuilderHeader> : 
                        <JsonBuilderRow 
                            field={props.field!} 
                            updateState={updateState} 
                            onToggleObject={onToggleObject} 
                            onToggleOptionsModal={onToggleOptionsModal} 
                        /> 
                }
            </div>

            <OptionModal 
                show={showOptionModal} 
                showToggler={() => onToggleOptionsModal} 
                field={props.field!} 
            />

            { 
                !props.isHeader && (props.field!.type === FieldType.ARRAY || props.field!.type === FieldType.OBJECT) ? 
                renderChildren() : <></> 
            }
        </> : <></>
    );
}