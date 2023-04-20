import "./Button.css";
import Loader from "../Loader";
import {useState} from "react";

export const ButtonTextType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  LINE: "line"
};

export const Button = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (e) => {
        setIsLoading(true);

    setTimeout(() => {
        setIsLoading(false);
        }, 5000);
    };

  return(
    <div className={`
        button button-${props.type}
        `}>
        {props.textType === ButtonTextType.PRIMARY && (
          <div className=" button-text" onClick={handleClick}>
            {!isLoading ? props.text : <Loader/>} 
          </div>
        )}
        {props.textType === ButtonTextType.SECONDARY && (
          <div className="button-text__border">{props.text}</div>
        )}
        {props.textType === ButtonTextType.LINE && (
          <div className="button-line__text">{props.text}</div>
        )}
        {props.icon && <div className="button-icon">{props.icon}</div>} 
    </div>
  )

}

