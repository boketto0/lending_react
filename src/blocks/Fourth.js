import './Fourth.css'
import CardBlock3 from '../cardRow3/CardBlock3';

function Fourth() {

    return(
        <div className='fourth-block'>
            <div className='fourth-block__title'>Анонсы и релизы
            </div>
            <div className='fourth-block__text'>Будьте вкурсе всех последних
                {"\n"}изменений и доработок в нашей дизайн системе
            </div>
        <CardBlock3/>
        <div className='fourth-block__container'>
            <div className='fourth-block__container__title'>Часто задаваемые вопросы</div>
            <div className='fourth-block__container__subtitle'>Мы ответили на самые популярные 
                {"\n"}вопросы, чтобы вы могли понять и решить 
                {"\n"}свою возникшую проблему
            </div>
            <div className='fourth-block__container__text'>
                Что такое дизайн-система?
            </div>
            <div className='fourth-block__container__text'>
                Для каких задач подходит?
            </div>
            <div className='fourth-block__container__text'>
                Как использовать дизайн-систему?
            </div>
            <div className='fourth-block__container__text'>
                Что такое компонент?
            </div>
            <div className='fourth-block__container__text'>
                Зачем нужна документация?
            </div>
        </div>
        </div>
    )
}

export default Fourth;