import "./ButtonData.css";
import IconButton from "../images/button_icon.svg"
import Button from "./Button";

function ButtonData(props) {

  const data = [
    {
      icon: <img src={IconButton}/>,
      text: 'Задать вопрос'
    },
    {
      icon: '',
      text: 'Все компоненты'
    },
    {
      icon: '',
      text: 'Все компоненты'
    },
    {
      icon: '',
      text: 'Задать вопрос'
    }
]

    return(
        <Button>
            
          { data.map((dt) => {
            return(
              <div className='button'>
                <div className='button__icon'>{dt.icon}</div>
                <div className='button__text'>{dt.text}</div>
              </div>
            )
          })}
      </Button>
    )

}

export default ButtonData;

// передавать пропсом саму иконку, док react, импортировать svg как компонент