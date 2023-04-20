import './CardBlock1.css'
import Cards1 from '../cards/Cards1';
import Icon1 from '../images/cards1_images/Frame 427318203 (1).svg'
import Icon2 from '../images/cards1_images/Frame 427318215 (3).svg'
import Icon3 from '../images/cards1_images/Button group Sets (1).svg'
import Icon4 from '../images/cards1_images/Frame 427318215 (4).svg'
import Icon5 from '../images/cards1_images/Frame 427318215 (5).svg'

function CardBlock1(props) {


  const elements = [
    {
      picture: <img src={Icon1}/>,
      title: 'Button',
      circle: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon2}/>,
      title: 'Alerts',
      circle: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon3}/>,
      title: 'Button group',
      circle: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon4}/>,
      title: 'Modal',
      circle: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    },
    {
      picture: <img src={Icon5}/>,
      title: 'Date picker',
      circle: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'
    }
]


    return(
        <Cards1 className="card-block__elements1 ">

          { elements.map((el) => {
            return(
              <div className='element1-item'>
                  <div className='element1-item__circle'>{el.circle}</div>
                  <div className='element1_content__wrapper'>
                    <div className='element1-item__picture'>{el.picture}</div>
                    <div className='element1-item__title'>{el.title}</div>
                    <div className='element1-item__text'>{el.text}</div>
                  </div>
              </div>
            )
          })}
      </Cards1>
    )

}

export default CardBlock1;