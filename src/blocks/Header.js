import './Header.css'
import Button from './Button';

function Header() {
    return(
        <div className='header-block'>
            <img src="C:\Users\User\Desktop\сбер\Work\lending\src\images\sber tech.svg" class="header-title" alt="..."></img>
            <div className='header-text'>
                <div className='header-text1 header-text__design'>
                <a href = "#">Дизайн</a></div>
                <div className='header-text2'>
                <a href = "#">Разработка</a></div>
            </div>
            <div className='header-button'>
                <div className='header-button__text'>Задать вопрос</div>
            </div>
        </div>
    )
}

export default Header;