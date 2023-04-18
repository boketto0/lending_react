import "./Button.css";
import {useState} from 'react'
import Loader from "./Loader";

let Button = (props) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return(
    <div id="btn" className={`
        button button-${props.position}
        button button-${props.size}
        button button-${props.color}
        button button-${props.border}
        `}>
        <div className=" button-text" onClick={handleClick}>
          {!isLoading ? props.text : <Loader/>} 
        </div>
    </div>
  )

}
export default Button;
