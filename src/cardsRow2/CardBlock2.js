import './CardBlock2.css'
import Cards2 from '../cards/Cards2';

function CardBlock2(props) {

  const elements2 = [
    {
        picture: '',
        title: 'Справочники',
    },
    {
        picture: '',
        title: 'Интерактивная документация',
    },
    {
        picture: '',
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