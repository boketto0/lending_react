import './Fourth.css'
import CardBlock3 from '../cardRow3/CardBlock3';
import List3 from '../listRow3/List3';

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
                <List3/>
                </div>
        </div>
    )
}

export default Fourth;