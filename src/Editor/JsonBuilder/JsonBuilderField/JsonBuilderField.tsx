import { useState } from "react";
import { Field } from "../../interfaces/Field.interface";
import { Header } from "../../interfaces/Header.interface";

const headers : Header = {
    titles : ['FIELD NAME', 'TYPE','GENERATION TYPE', 'VALUE']
}

export default function JsonBuilderField(props : any){
    const [field, setField] = useState({
        fieldName : '',
        value : ''
    } as Field);

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

    const rowPrefix = props.isHeader ? "json-builder-row__header" : "json-builder-row__field";
    const cellPrefix = rowPrefix + "__cell";
    const cellTitlePrefix = cellPrefix + "-title";

    return (
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
                            <select></select>
                        </div>

                        <div className={cellPrefix}>
                            <select></select>
                        </div>

                        <div className={cellPrefix}>
                            <input value={field.value} onChange={(e) => onEditFieldValue(e)}></input>
                        </div>
                    </>
                )
            }
        </div>
    );
}