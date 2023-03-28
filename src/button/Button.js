import "./Button.css";

function Button(props) {
  const classes = props.className; 
    
  return <div className={classes}>{props.children}</div>
}
export default Button;

// передавать пропсом саму иконку, док react, импортировать svg как компонент