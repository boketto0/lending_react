import CardBlock2 from "../cardsRow2/CardBlock2";
import './ThirdBlock.css'
import Button from "../button/Button";
import Icon1 from '../images/thirdblock_images/thirdblock_picture1.svg'
import List2 from "../listRow2/List2";

function ThirdBlock(props) {

    const line__text='Все компоненты'
    const size = 'large'
    const position = 'center'

    return(
        <div className="third-block">
        <div className='third-block__title'>Выполненные проекты
        </div>
        <div className='third-block__text'>База компонентов для создания интерфейсов любой сложности
        </div>
        <CardBlock2/>
        <Button line__text={line__text} size={size} position={position}/>
        <div className="third-block__container">
                <img src={Icon1} className="third-block__picture"/>
                <div>
                    <div className="third-block__container__title">Что такое дизайн‑система 
                        {"\n"}и зачем она нужна?
                    </div>
                    <div className="text__block-text">
                    Дизайн-система — это набор компонентов, правил, предписаний 
                    {"\n"}и инструментов для повышения качества и скорости разработки
                    {"\n"}продуктов, а также эффективной поддержки существующих
                    </div>
                    <List2/>
                </div>
            </div>
        </div>
    );
  }
  
  export default ThirdBlock;