import './CardBlock3.css'
import Cards3 from '../cards/Cards3';
import Icon1 from '../images/card3_images/card3.1.svg'
import Icon2 from '../images/card3_images/card3.2.svg'

function CardBlock3(props) {


  const elements3 = [
    {
      picture: <img src={Icon1}/>,
      title: 'Версия 2.0',
      text: '14 мая 2022 '
    },
    {
      picture: <img src={Icon1}/>,
      title: 'Версия 2.0',
      text: '14 мая 2022'
    },
    {
      picture: <img src={Icon2}/>,
      title: 'Версия 1.0',
      text: 'Доработка и улучшение документа', 
      subtitle: 'Следующее обновление •  нет даты'
    }
]

    return(
        <Cards3 className="card-block__elements3 ">

          { elements3.map((el) => {
            return(
              <div className='element3-item'>
                <div className='element3-item__picture'>{el.picture}</div>
                <div className='element3-item__textblock'>
                  <div className='element3-item__title'>{el.title}</div>
                  <div className='element3-item__subtitle'>{el.subtitle}</div>
                  <div className='element3-item__text'>{el.text}</div>
                </div>
              </div>
            )
          })}
      </Cards3>
    )

}

export default CardBlock3;