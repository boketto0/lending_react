import "./Button.css";

function Button(props) {

  return(
    <div className={`button button-${props.position} button button-${props.size}`}>
        <div className="button-text">{props.text}</div>
        {props.icon && <div>{props.icon}</div>} 
    </div>
  )

}
export default Button;

// передавать пропсом саму иконку, док react, импортировать svg как компонент