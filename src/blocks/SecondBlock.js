import CardBlock1 from "../cardsRow1/CardBlock1";
import './SecondBlock.css'
import Button from "./Button";

function SecondBlock() {

  return(
    <div className="second-block">
      <div className='second-block__title'>Компоненты
      </div>
      <div className='second-block__text'>База компонентов для создания интерфейсов любой сложности
      </div>
      <CardBlock1/>
      <Button/>
      <div className='second-block__container'>
            <div className='second-block__picture'/>
            <div>
                <div className='second-block__container__title'>Зачем вам дизайн система?</div>
                <div className='second-block__container__text'>Запускать продукты быстрее и дешевле</div>
                <div className='second-block__container__text'>Просто проверять гипотезы</div>
                <div className='second-block__container__text'>Только лучшие практики</div>
                <div className='second-block__container__text'>Довольные пользователи</div>
            </div>
        </div>
    </div>

  );
  }
  
  export default SecondBlock;