import JsonBuilder from './JsonBuilder/JsonBuilder';
import "./Editor.scss";
import JsonResult from './JsonResult/JsonResult';
import { useState } from 'react';
import FieldsManager from '../utilities/FieldsManager';

export default function Editor(){

    const [state, forceState] = useState(false);

    function generateJson(){
        const x = FieldsManager.json;
        forceState(!state);
    }

    return (
        <div className="editor">
            <JsonBuilder></JsonBuilder>
            <JsonResult generateJson={generateJson}></JsonResult>
        </div>
    );
}