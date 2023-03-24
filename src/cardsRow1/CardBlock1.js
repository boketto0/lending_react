import './CardBlock1.css'
import Cards1 from '../cards/Cards1';

function CardBlock1(props) {


  const elements = [
    {
      picture: '',
      title: 'Button',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: '',
      title: 'Alerts',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: '',
      title: 'Button group',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: '',
      title: 'Modal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: '',
      title: 'Date picker',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    }
]


    return(
        <Cards1 className="card-block__elements1 ">

          { elements.map((el) => {
            return(
              <div className='element1-item'>
                <div className='element1-item__picture'>{el.picture}</div>
                <div className='element1-item__title'>{el.title}</div>
                <div className='element1-item__text'>{el.text}</div>
              </div>
            )
          })}
      </Cards1>
    )

}

export default CardBlock1;