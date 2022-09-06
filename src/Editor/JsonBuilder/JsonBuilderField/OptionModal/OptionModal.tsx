import { useState } from "react";
import { Field } from "../../../../interfaces/Field.interface";
import FieldsManager from "../../../../utilities/FieldsManager";
import { FieldType } from "../../../../utilities/FieldType.model";
import { GenerationType } from "../../../../utilities/generationType.utilities";
import { randomString } from "../../../../utilities/randomString.method";
import { ChoiceOptions } from "../../../../utilities/value/data/choices";
import { NumberOptions } from "../../../../utilities/value/data/number";
import { RepeatOptions } from "../../../../utilities/value/data/repeat";
import "./OptionModal.scss";

const prefix = "modal";

interface OptionModalProps{
  field : Field;
  show: boolean;
  showToggler: Function;
}

export default function OptionModal(props : OptionModalProps) {

  const [inputValue, setInputValue] = useState("");

  const [state, forceState] = useState(false);

  function onEditInputValue(e : any){
    setInputValue(e.target.value);
  }

  function renderRepeatSettings(){
    if(props.field.parentId !== undefined && FieldsManager.getParentById(props.field.parentId).type === FieldType.ARRAY){
      return (
          <div>
            <label htmlFor="repeat">Repeat</label>
            <input 
              id="repeat"
              defaultValue={(props.field.options as RepeatOptions).repeat} 
              placeholder="Repeat" 
              type="number" 
              onChange={(e) => { (props.field.options as RepeatOptions).repeat = parseInt(e.target.value); }}>
            </input>
          </div>
        );
    }
    else{
      return <></>;
    }
  }

  return (
    <>
      {
        props.show ? (
          <>
            <div className={prefix}>
              <div className={prefix + "-header"}>
                <p>{props.field.generationType}</p>
              </div>

              {renderBody()}

              <div className={prefix + "-footer"}>
                <button onClick={props.showToggler()}>Close</button>
              </div>
            </div>
            <div className="overlay"></div>
          </>
        ) : <></>
      }
    </>
  );

  function renderBody(){
    if(props.field.generationType === GenerationType.RANDOM_NUMBER){
      return(
        <div 
          className={prefix + "-body"}
        >
          {
            renderRepeatSettings()
          }

          <div>
            <label htmlFor="min">Min</label>
            <input 
              id="min"
              defaultValue={props.field.options.min} 
              placeholder="min" 
              type="number" 
              onChange={(e) => { props.field.options.min = parseInt(e.target.value); }}>
            </input>
          </div>

          <div>
            <label htmlFor="max">Max</label>
            <input 
              id="max"
              defaultValue={props.field.options.max} 
              placeholder="max" 
              type="number" 
              onChange={(e) => { props.field.options.max = parseInt(e.target.value); }}> 
            </input>
          </div>

          <div>
            <label htmlFor="decimals">Total decimals</label>
            <input 
              id="decimals"
              defaultValue={(props.field.options as NumberOptions).totalDecimals} 
              placeholder="Total decimals" 
              type="number" 
              min="0" 
              onChange={(e) => { (props.field.options as NumberOptions).totalDecimals = parseInt(e.target.value); }}>
            </input>
          </div>
        </div>
      );
    }
    else if(props.field.generationType === GenerationType.RANDOM_DATE){
      return(
        <div 
          className={prefix + "-body"}
        >
          {
            renderRepeatSettings()
          }

          <div className={prefix + "-body__field-container"}>
            <label htmlFor="start">Start</label>
            <input 
              style={{
                'marginRight' : 50
              }}
              id="start"
              defaultValue={props.field.options.min} 
              placeholder="min" 
              type="date" 
              onChange={(e) => { props.field.options.min = e.target.value; }}>
            </input>
            <label htmlFor="end">End</label>
            <input 
              id="end"
              defaultValue={props.field.options.max} 
              placeholder="max" 
              type="date" 
              onChange={(e) => { props.field.options.max = e.target.value; }}> 
            </input>
          </div>
        </div>
      );
    }
    else if(props.field.generationType === GenerationType.RANDOM_CHOICE){
      return(
        <div 
          className={prefix + "-body"}
        >
          {
            renderRepeatSettings()
          }

          <div className={prefix + "-body__field-container"}>
            <input 
              placeholder="Add choice" 
              onChange={(e) => onEditInputValue(e)}
            >
            </input>
            <button
              onClick={() => {
                if((props.field.options as ChoiceOptions).choices === undefined){
                  (props.field.options as ChoiceOptions).choices = [];
                }

                (props.field.options as ChoiceOptions).choices.push(inputValue);
                forceState(!state);
              }}
            >Add</button>
          </div>

          <div className={prefix + "-body__list-container"}>
            {
              (props.field.options as ChoiceOptions).choices !== undefined ? (props.field.options as ChoiceOptions).choices.map((choice : string) => {
                return (
                  <div className={prefix + "-body__list-container-item"}>
                    <p key={randomString()}>{choice}</p>
                    <p 
                      className={prefix + "-body__list-container-item-close"}
                      onClick={() => {
                        (props.field.options as ChoiceOptions).choices.splice((props.field.options as ChoiceOptions).choices.indexOf(choice),1);
                        forceState(!state);
                      }}
                    >
                      &#215;
                    </p>
                  </div>
                );
              }) : <></>
            }
          </div>
        </div>
      );
    }
    else{
      return(
        <div className={prefix + "-body"}>
          {
            renderRepeatSettings()
          }
        </div>
      )
    }
  }
}