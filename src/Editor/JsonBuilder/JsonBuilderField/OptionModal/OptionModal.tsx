import { useState } from "react";
import { Field } from "../../../../interfaces/Field.interface";
import { GenerationType } from "../../../../utilities/generationType.utilities";
import { randomString } from "../../../../utilities/randomString.method";
import { ChoiceOptions } from "../../../../utilities/value/data/choices";
import { NumberOptions } from "../../../../utilities/value/data/number";
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
          <div className={prefix + "-body__field-container"}>
            <input 
              defaultValue={props.field.options.min} 
              placeholder="min" 
              type="number" 
              onChange={(e) => { props.field.options.min = parseInt(e.target.value); }}>
            </input>
            <input 
              defaultValue={props.field.options.max} 
              placeholder="max" 
              type="number" 
              onChange={(e) => { props.field.options.max = parseInt(e.target.value); }}> 
            </input>
          </div>

          <div>
            <input 
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
          <div className={prefix + "-body__field-container"}>
            <input 
              defaultValue={props.field.options.min} 
              placeholder="min" 
              type="date" 
              onChange={(e) => { props.field.options.min = e.target.value; }}>
            </input>
            <input 
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
                  </div>
                );
              }) : <></>
            }
          </div>
        </div>
      );
    }
  }
}