import './Header.css'
import Icon from '../images/header_images/Logo.svg'
import ButtonIcon from '../images/header_images/Group.svg'
import Button from '../button/Button';

let Header = (props) => {

    const text = 'Задать вопрос'
    const icon = <img src={ButtonIcon}/>
    const position = 'right'
    const size = 'small'
    const color = 'color'

    return(
        <div className='header-block'>
            <img className='header-icon' src={Icon}/>
            <div className='a header-text'>
                <div className='header-text1 header-text__design'>
                <a href = "#">Дизайн</a></div>
                <div className='header-text1'>
                <a href = "#">Разработка</a></div>
            </div>
            <Button text={text} icon={icon} position={position} size={size} color={color}/>
           </div>
    )

}

export default Header;