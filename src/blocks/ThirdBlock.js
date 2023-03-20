import CardBlock2 from "../cardsRow2/CardBlock2";
import './ThirdBlock.css'

function ThirdBlock() {
    const elements2 = [
        {
            picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
            title: 'Справочники',
        },
        {
            picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
            title: 'Интерактивная документация',
        },
        {
            picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
            title: 'Панель центра уведомлений',
        }
  ]

  return(
    <div className="third-block">
      <div className='third-block__title'>Выполненные проекты
      </div>
      <div className='third-block__text'>База компонентов для создания интерфейсов любой сложности
      </div>
      <CardBlock2 elements2={elements2}/>
    </div>
  );
  }
  
  export default ThirdBlock;