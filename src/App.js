import Button from "./Button";
import './App.css';

  function App() {
    
    const position = 'right'
    const size = 'small'
    const color = 'color'
    const text = 'Задать вопрос'
  
    return (
      <Button
          text={text}
          position={position}
          size={size}
          color={color}
        />
    );

}

  export default App;

