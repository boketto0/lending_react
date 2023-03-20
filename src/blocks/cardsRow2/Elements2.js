import './Elements2.css'

function Elements2(props) {
    
    return (
    <div className='element-item'>
        <div className='element-item__title h2'>{props.title}</div>
        <div className='element-item__text'>{props.text}</div>
        <div className='element-item__picture'>{props.picture}</div>
    </div>
    )
}

export default Elements2;