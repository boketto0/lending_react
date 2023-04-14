import "./Button.css";

let Button = (props) => {


  return(
    <div className={`
        button button-${props.position}
        button button-${props.size}
        button button-${props.color}
        button button-${props.border}
        `}>
        <div className=" button-text">{props.text}</div>
        <div className="button-text__border">{props.text__border}</div>
        <div className="button-line__text">{props.line__text}</div>

        {props.icon && <div className="button-icon">{props.icon}</div>} 
    </div>
  )

}
export default Button;

// передавать пропсом саму иконку, док react, импортировать svg как компонент