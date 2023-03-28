import './Header.css'
import Icon from '../images/sber tech.svg'

function Header() {
    return(
        <div className='header-block'>
            <img className='header-icon' src={Icon}/>
            <div className='header-text'>
                <div className='header-text1 header-text__design'>
                <a href = "#">Дизайн</a></div>
                <div className='header-text2'>
                <a href = "#">Разработка</a></div>
            </div>
            {/* <ButtonData className="header-button"/>      */}
           </div>
    )
}

export default Header;