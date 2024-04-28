import React from "react"
import "./UK_intro.css"
import "./UK.css"
import Footer from '../../components/Footer/Footer';
import {Home} from '../Home/Home'
import ContactForm from "../../components/ContactForm/ContactForm";
export const UK = () =>{
    return <div>
        <div className="uk-intro-section">
        <div className="uk-intro-section__text">
            <div className="uk-intro-section__header">
                Великобритания
            </div>
            <div className="uk-intro-section__descr">
            Оформление визы в Великобританию может быть простым и быстрым при профессиональном подходе к подготовке документов
            </div>
            
                <button className="uk-intro-section__btn">Заказать звонок</button>
        
        </div>
        </div>

        <div className="important-section">
           <div className="important-section_content-wrapper">
           <div className="important-section_header">
                Важно знать:
            </div>
            <div className="important-section_text">
            Сроки рассмотрения заявлений составляют 4-6 недель для граждан РФ, а для граждан других государств около 3-х недель. Ближайшая запись на сдачу биометрии, через месяц.

            Через наше агентство возможно попасть в Визовый центр на следующий день после обращения к нам, если имеются все необходимые документы.
            </div>
           </div>
        </div>


        <div className="visa-types-section">
            <div className="visa-types-section_header">
                Тип визы:
            </div>
            <div className="visa-types-section_card-wrapper">

            <div className="visa-type_card">
                <div className="icon_wrapper">
                <img src="/icons8--100.png" alt="Иконка"/>
                </div>
                <h3>Туристическая</h3>
                <div className="nes-docs">необходимые документы:</div>
                <ul>
                    <li>действующий заграничный паспорт</li>
                    <li>справка с работы</li>
                    <li>выписка из банка с движением средств</li>
                    <li>для несовершеннолетних и пенсионеров потребуются финансовые документы спонсора поездки</li>
                    <li>документы на движимое/недвижимое имущество: квартира, земля, дом, машина и пр. при наличии</li>
                    <li>для несовершеннолетних так же требуется предоставить нотариально заверенное согласие на выезд, в случае, если поездка совершается с одним родителем или с третьим лицом</li>
                </ul>
            </div>

            <div className="visa-type_card">
                <div className="icon_wrapper">
                <img src="/buss_icon.png" alt="Иконка"/>
                </div>
                <h3>Бизнес</h3>
                <div className="nes-docs">необходимые документы:</div>
                <ul>
                    <li>приглашение из Великобритании на семинар, выставку или от бизнес-партнера</li>
                    <li>действующий заграничный паспорт</li>
                    <li>справка с работы</li>
                    <li>выписка из банка с движением средств</li>
                    <li>свидетельства о заключении брака и рождении детей при наличии</li>
                    <li>документы на движимое/недвижимое имущество: квартира, земля, дом, машина и пр. при наличии</li>
                </ul>
            </div>


            <div className="visa-type_card">
                <div className="icon_wrapper">
                <img src="/stud_icon.png" alt="Иконка"/>
                </div>
                <h3>Студентеческая</h3>
                <div className="nes-docs">необходимые документы:</div>
                <ul>
                    <li>приглашение от учебного заведения</li>
                    <li>подтверждение оплаченного обучения</li>
                    <li>действующий заграничный паспорт</li>
                    <li>финансовые документы заявителя или спонсора поездки: справка с работы и выписка из банка</li>
                    <li>свидетельства о заключении брака и рождении детей при наличии</li>
                    <li>документы на движимое/недвижимое имущество: квартира, земля, дом, машина и пр. при наличии</li>
                </ul>
            </div>

        </div>
    
       </div>
       <ContactForm/>

        <Footer></Footer>
    </div>
}