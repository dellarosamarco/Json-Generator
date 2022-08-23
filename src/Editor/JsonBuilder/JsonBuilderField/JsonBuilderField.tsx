import { useState } from "react";
import { Field } from "../../interfaces/Field.interface";
import { Header } from "../../interfaces/Header.interface";
import { FieldType, FieldTypeInterface, fieldTypes } from "../../models/FieldType.model";

const headers : Header = {
    titles : ['FIELD NAME', 'TYPE','GENERATION TYPE', 'VALUE']
}

export default function JsonBuilderField(props : any){
    const [field, setField] = useState({
        fieldName : '',
        value : '',
        type : ''
    } as Field);

    const [objectOpened, setObjectOpened] = useState(false);

    const [objectTotalFields, setObjectTotalFields] = useState(0);

    function onEditFieldName(event : any){
        setField({
            ...field,
            fieldName : event.target.value
        });
    }

    function onEditFieldValue(event : any){
        setField({
            ...field,
            value : event.target.value
        });
    }

    function onEditFieldType(event : any){
        setField({
            ...field,
            type : event.target.value
        });
    }

    function onToggleObject(){
        setObjectOpened(!objectOpened);
    }

    function onAddField(){
        setObjectTotalFields(objectTotalFields+1);
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
                                <input value={field.fieldName} onChange={(e) => onEditFieldName(e)}></input>
                            </div>

                            <div className={cellPrefix}>
                                <select onChange={(e) => onEditFieldType(e)}>
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
                                    field.type !== FieldType.OBJECT ? (<select></select>) : <></>
                                }
                            </div>

                            <div className={cellPrefix}>
                                {
                                    field.type !== FieldType.OBJECT ? 
                                    (<input value={field.value} onChange={(e) => onEditFieldValue(e)}></input>) 
                                    : <button className="json-builder-row-button" onClick={onToggleObject}>{ objectOpened ? 'CLOSE OBJECT' : 'OPEN OBJECT'}</button>
                                }
                            </div>
                        </>
                    )
                }
            </div>

            {
                field.type === FieldType.OBJECT ? 
                <div
                    className="json-builder-object"
                    style={{
                        display : objectOpened ? 'flex' : 'none',
                        backgroundColor: 'var(--tertiary-color)'
                    }}
                >
                    <button className="json-builder-object-button" onClick={onAddField}>ADD NEW FIELD</button>
                    {
                        [...new Array(objectTotalFields)].map(() => {
                            return <JsonBuilderField></JsonBuilderField>
                        })
                    }
                </div>
                : <></>
            }
        </>
    );
}