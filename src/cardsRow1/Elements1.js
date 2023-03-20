import './Elements1.css'

function Elements1(props) {
    
    return (
    <div className='element1-item'>
        <div className='element1-item__text'>{props.text}</div>
        <div className='element1-item__title h2'>{props.title}</div>
        <div className='element1-item__picture'>{props.picture}</div>
    </div>
    )
}

export default Elements1;