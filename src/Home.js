import Button from "./Button";
import './App.css';

function Home() {
        const position = 'right'
    const size = 'small'
    const color = 'color'
    const text = 'Click'
    
    return(
         <Button text={text} position={position} size={size} color={color}/>
    )
}

export default Home;