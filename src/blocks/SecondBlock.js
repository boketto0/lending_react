import CardBlock1 from "../cardsRow1/CardBlock1";
import './SecondBlock.css'
import {Button} from "./Components/Button/Button";
import Icon from '../images/secondblock_images/Illustrations (1).svg'
import List1 from "../listRow1/List1";

function SecondBlock(props) {

  const text__border ='Все компоненты'
  // const loader2 = 'loader2'

  return(
    <div className="second-block">
      <div className='second-block__title'>Компоненты
      </div>
      <div className='second-block__text'>База компонентов для создания интерфейсов любой сложности
      </div>
      <CardBlock1/>
      <div className="button2-position"> 
        <Button type='secondary'  text__border={text__border}/> 
      </div>
      <div className='second-block__container'>
            <img className='second-block__picture' src={Icon}/>
            <div className="second-block__text__block">
                <div className='second-block__container__title'>Зачем вам дизайн система?</div>
                <div className='second-block__container__text'>Кнопки, иконки, списки, таблицы — основные 
                    {"\n"}элементы, из которых собирается интерфейс</div>
                <List1/>
            </div>
        </div>
    </div>

  );
  }
  
  export default SecondBlock;