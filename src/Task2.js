import './Task2.css'
import {useState} from "react";

export default function Task2() {

    const [isFocus, setFocus] = useState(false);

    function handleIsFocused() {
        setFocus(true);
        alert("Текст предупреждения");
    }


    return(
        <div className="block2">
            <div className='btn' id='btn' onFocus={handleIsFocused}>
                {!isFocus? "Сохранить" : "Загрузка"}
            </div>
        </div>
    )
}

// При фокусе на поле ввода (например, инпут) 
// показывать браузерное предупреждение с каким-ниюудь текстом

{/* <input id="elem" type="button" value="Нажми меня!">
<script>
  elem.onclick = function() {
    alert('Спасибо');
  };
</script> */}