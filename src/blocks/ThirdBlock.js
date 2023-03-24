import CardBlock2 from "../cardsRow2/CardBlock2";
import './ThirdBlock.css'
import Button from "./Button";

function ThirdBlock() {

  return(
    <div className="third-block">
      <div className='third-block__title'>Выполненные проекты
      </div>
      <div className='third-block__text'>База компонентов для создания интерфейсов любой сложности
      </div>
      <CardBlock2/>
      <Button/>
      <div className='third-block__container'>
            <div className='third-block__picture'/>
            <div>
                <div className='third-block__container__title'>Что такое дизайн‑система 
                    {"\n"}и зачем она нужна?
                </div>
                <div className="text__block-text">
                Дизайн-система — это набор компонентов, правил, предписаний 
                {"\n"}и инструментов для повышения качества и скорости разработки
                {"\n"}продуктов, а также эффективной поддержки существующих
                </div>
                <div className='third-block__container__text__block'>
                    <div className="text__block-title">Всем всем</div>
                    <div className="text__block-text">Витрина диаграмм с подробной документацией {"\n"}и правилами использования.</div>
                </div>
                <div className='third-block__container__text__block'>
                    <div className="text__block-title">Дизайнерам</div>
                    <div className="text__block-text">Диаграммы в Figma Community, {"\n"}библиотека и правила использования.</div>
                </div>
                <div className='third-block__container__text__block'>
                    <div className="text__block-title">Разработчикам</div>
                    <div className="text__block-text">Библиотека диаграмм в виде NPM-пакета.</div>
                </div>
            </div>
        </div>
    </div>
  );
  }
  
  export default ThirdBlock;