import CardBlock from "./CardBlock";
import './SecondBlock.css'

function SecondBlock() {
    const elements = [
      {
        picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
        title: 'Button',
        text: 'fdgh'
      },
      {
        picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
        title: 'Alerts',
        text: 'fdgh'
      },
      {
        picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
        title: 'Button group',
        text: 'fdgh'
      },
      {
        picture: <img src ="src\images\Block1Picture.jpg" alt="..."></img>,
        title: 'Modal',
        text: 'fdgh'
      }
  ]
  //под капотом
  /*return React.createElement('div', {}, 
  React.createElement('h1', {}, 'Hello'),
  React.createElement(elements, {elements: elements} ));*/
  return(
    <CardBlock className="block" elements={elements}/>
  );
  }
  
  export default SecondBlock;