import './CardBlock3.css'
import Cards3 from '../cards/Cards3';

function CardBlock3(props) {


  const elements3 = [
    {
      picture: '',
      title: 'Версия 2.0',
      text: '14 мая 2022 '
    },
    {
      picture: '',
      title: 'Версия 2.0',
      text: '14 мая 2022'
    },
    {
      picture: '',
      title: 'Версия 1.0',
      text: 'Доработка и улучшение документа', 
    }
]

    return(
        <Cards3 className="card-block__elements3 ">

          { elements3.map((el) => {
            return(
              <div className='element3-item'>
                <div className='element3-item__picture'>{el.picture}</div>
                <div className='element3-item__title'>{el.title}</div>
                <div className='element3-item__text'>{el.text}</div>
              </div>
            )
          })}
      </Cards3>
    )

}

export default CardBlock3;