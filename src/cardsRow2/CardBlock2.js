import './CardBlock2.css'
import Cards2 from '../cards/Cards2';
import Elements2 from './Elements2';

function CardBlock2(props) {

    return(
        <Cards2 className="card-block__elements2">
          <Elements2
            picture={props.elements2[0].picture} 
            title={props.elements2[0].title} 
          />
          <Elements2
            picture={props.elements2[1].picture} 
            title={props.elements2[1].title} 
          />
          <Elements2
            picture={props.elements2[2].picture} 
            title={props.elements2[2].title} 
          />
      </Cards2>
    )
}

export default CardBlock2;