import './CardBlock2.css'
import Cards2 from '../../cards/Cards2';
import Elements2 from './Elements2';

function CardBlock2(props) {

    return(
        <Cards2 className="elements">
          <Elements2
            picture={props.elements[0].picture} 
            title={props.elements[0].title} 
            text={props.elements[0].text} 
          />
          <Elements2
            picture={props.elements[1].picture} 
            title={props.elements[1].title} 
            text={props.elements[1].text} 
          />
          <Elements2
            picture={props.elements[2].picture} 
            title={props.elements[2].title} 
            text={props.elements[2].text} 
          />
          <Elements2
            picture={props.elements[3].picture} 
            title={props.elements[3].title} 
            text={props.elements[3].text} 
          />
            <Elements2
            picture={props.elements[4].picture} 
            title={props.elements[4].title} 
            text={props.elements[4].text} 
          />
      </Cards2>
    )
    // const { picture } = 
}

export default CardBlock2;