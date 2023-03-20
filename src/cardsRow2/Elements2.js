import './Elements2.css'

function Elements2(props) {
    
    return (
    <div className='element2-item'>
        <div className='element2-item__title h2'>{props.title}</div>
        <div className='element2-item__picture'>{props.picture}</div>
    </div>
    )
}

export default Elements2;