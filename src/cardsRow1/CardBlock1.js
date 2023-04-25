import './CardBlock1.css'
import Cards1 from '../blocks/components/cards/Cards1';
import Icon2 from '../images/cards1_images/card1.2.svg'

function CardBlock1(props) {


  const elements = [
    {
      picture: <img src={Icon2}/>,
      title: 'Button',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon2}/>,
      title: 'Alerts',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon2}/>,
      title: 'Button group',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon2}/>,
      title: 'Modal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon2}/>,
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