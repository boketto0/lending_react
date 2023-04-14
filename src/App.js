import Button from "./Button";
import './App.css';
import Loader from './Loader';
import ShowLoader from "./ShowLoader";

let App = (props) => {

  const position = 'right'
  const size = 'small'
  const color = 'color'

  // text.showLoader = function() {
  //   onclick
  // }

  return (
    <div className="App">
      {/* <Button position={position} size={size} color={color}/> */}
      <label for="pseudoBtn" class="btn">Кнопка</label>
      <input type="checkbox" id="pseudoBtn"></input>
      <Loader className='loader'></Loader>
      {/* <Button onClick={(e) => this.} */}
      {/* <ShowLoader/>  */}

    </div>
  );

}

export default App;