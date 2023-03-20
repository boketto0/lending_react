import CardBlock1 from "../cardsRow1/CardBlock1";
import './SecondBlock.css'

function SecondBlock() {
    const elements = [
      {
        picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
        title: 'Button',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
      },
      {
        picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
        title: 'Alerts',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
      },
      {
        picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
        title: 'Button group',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
      },
      {
        picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
        title: 'Modal',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
      },
      {
        picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
        title: 'Date picker',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
      }
  ]
  
  //под капотом
  /*return React.createElement('div', {}, 
  React.createElement('h1', {}, 'Hello'),
  React.createElement(elements, {elements: elements} ));*/
  return(
    <div className="second-block">
      <div className='second-block__title'>Компоненты
      </div>
      <div className='second-block__text'>База компонентов для создания интерфейсов любой сложности
      </div>
      <CardBlock1 elements={elements}/>
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