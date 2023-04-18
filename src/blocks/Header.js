import './Header.css'
import Icon from '../images/header_images/Logo.svg'
import ButtonIcon from '../images/header_images/Group.svg'
import {Button, ButtonTextType} from './Components/Button/Button';

let Header = (props) => {

    const text = 'Задать вопрос'
    const icon = <img src={ButtonIcon}/>
    const type = ButtonTextType.PRIMARY

    return(
        <div className='header-block'>
            <img className='header-icon' src={Icon}/>
            <div className='a header-text'>
                <div className='header-text1 header-text__design'>
                <a href = "#">Дизайн</a></div>
                <div className='header-text1'>
                <a href = "#">Разработка</a></div>
            </div>
            <Button type={type} textType={ButtonTextType.PRIMARY} text={text} icon={icon}/>
           </div>
    )

}

export default Header;