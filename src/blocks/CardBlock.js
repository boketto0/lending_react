import './CardBlock.css'
import Elements from './Elements'
import Card from '../cards/Card'

function CardBlock(props) {
    
    return(
        <Card className="elements">
        <Elements 
        picture={props.elements[0].picture} 
        title={props.elements[0].title} 
        text={props.elements[0].text} 
        />
        <Elements
        picture={props.elements[1].picture} 
        title={props.elements[1].title} 
        text={props.elements[1].text} 
        />
        <Elements
        picture={props.elements[2].picture} 
        title={props.elements[2].title} 
        text={props.elements[2].text} 
        />
        <Elements
        picture={props.elements[3].picture} 
        title={props.elements[3].title} 
        text={props.elements[3].text} 
        />
      </Card>
    )
}

export default CardBlock;