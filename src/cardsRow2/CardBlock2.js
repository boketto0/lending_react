import './CardBlock2.css'
import Cards2 from '../blocks/Components/cards/Cards2';
import Icon1 from '../images/cards2_images/card2.1.svg'
import Icon2 from '../images/cards2_images/card2.2.svg'
import Icon3 from '../images/cards2_images/card2.3.svg'

function CardBlock2(props) {

  const elements2 = [
    {
        picture: <img src={Icon1}/>,
        title: 'Справочники',
    },
    {
        picture: <img src={Icon2}/>,
        title: 'Интерактивная документация',
    },
    {
        picture: <img src={Icon3}/>,
        title: 'Панель центра уведомлений',
    }
]

    return(
        <Cards2 className="card-block__elements2">

          {elements2.map((el) => {
            return(
              <div className='element2-item'>
                <div className='element2-item__title'>{el.title}</div>
                <div className='element2-item__picture'>{el.picture}</div>
              </div>
            )
          })}
      </Cards2>
    )
}

export default CardBlock2;