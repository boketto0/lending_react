import "./Button.css";

const ButtonTextType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  LINE: "line"
};

let Button = (props) => {

  return(
    <div className={`
        button button-${props.type}
        `}>
        {props.textType === ButtonTextType.PRIMARY && (
          <div className="button-text">{props.text}</div>
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
export {Button, ButtonTextType};

// передавать пропсом саму иконку, док react, импортировать svg как компонент