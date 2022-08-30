import { Field } from "../../../../interfaces/Field.interface";
import { GenerationType } from "../../../../utilities/generationType.utilities";
import "./OptionModal.scss";

const prefix = "modal";

interface OptionModalProps{
  field : Field;
  show: boolean;
  showToggler: Function;
}

export default function OptionModal(props : OptionModalProps) {
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
          <div>
            <input placeholder="min" type="number"></input>
            <input placeholder="max" type="number"></input>
          </div>

          <div>
            <input placeholder="Total decimals" type="number"></input>
          </div>
        </div>
      );
    }
  }
}