import './CardBlock1.css'
import Cards1 from '../../cards/Cards1';
import Elements1 from './Elements1';

function CardBlock1(props) {

    return(
        <Cards1 className="elements">
          <Elements1 
            picture={props.elements[0].picture} 
            title={props.elements[0].title} 
            text={props.elements[0].text} 
          />
          <Elements1
            picture={props.elements[1].picture} 
            title={props.elements[1].title} 
            text={props.elements[1].text} 
          />
          <Elements1
            picture={props.elements[2].picture} 
            title={props.elements[2].title} 
            text={props.elements[2].text} 
          />
          <Elements1
            picture={props.elements[3].picture} 
            title={props.elements[3].title} 
            text={props.elements[3].text} 
          />
            <Elements1
            picture={props.elements[4].picture} 
            title={props.elements[4].title} 
            text={props.elements[4].text} 
          />
      </Cards1>
    )
    // const { picture } = 
}

export default CardBlock1;