import './Header.css'
import Icon from '../images/header_images/Logo.svg'
import ButtonIcon from '../images/header_images/Group.svg'
import Button from '../button/Button';

function Header(props) {

    const text = 'Задать вопрос'
    const icon = <img src={ButtonIcon}/>
    const position = 'right'

    return(
        <div className='header-block'>
            <img className='header-icon' src={Icon}/>
            <div className='header-text'>
                <div className='header-text1 header-text__design'>
                <a href = "#">Дизайн</a></div>
                <div className='header-text2'>
                <a href = "#">Разработка</a></div>
            </div>
            <Button text={text} icon={icon} position={position}/>
           </div>
    )
}

export default Header;