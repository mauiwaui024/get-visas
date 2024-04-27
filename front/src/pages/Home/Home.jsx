import React, { useState } from 'react';
import axios from 'axios';
import "./Home.css"
import "./Home_intro.css"
import "./Home_testimonials.css"
import "./Home_info.css"
import "./Home_steps.css"

import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import Modal from '../../components/Modal';

export const Home = () => {
  return (
    <div>
      <Modal/>
      <div class='intro-section'>
        <div class='intro-section__left'>
          <h3>Get-Visas</h3>
          <div class='intro-section_text'>
            <p>визовое агентство предоставляющее профессиональные визовые услуги с 2014 года. Мы специализируемся на оформлении виз в Великобританию, что позволяет нам обладать богатым опытом и глубокими знаниями в данной области.</p>
            <p>С 2019 года мы расширили свою деятельность и начали оказывать услуги по оформлению виз в страны Шенгенского соглашения и США. Мы стремимся предложить нашим клиентам полный спектр услуг для удобства путешествий и бизнеса. А на сегодняшний день, мы можем помочь в оформлении визы в любую точку мира.</p>
          </div>
        </div>

        <div class='intro-section__right'>
          <div class='intro-section__right_img'></div>
        </div>
      </div>


      <div className="testimonials-section">
        <div className="testimonials-section__left">
          <h1>4000+</h1>
          <h3>полученных виз</h3>
          <p>индивидуальный подход к каждому клиенту</p>
        </div>

        <div className="testimonials-section__right">
          <h1>93%</h1>
          <h3>одобрений</h3>
          <p>имеем прямой доступ к информации из посольств и визовых центров</p>
        </div>
      </div>

      {/* section with cards */}

      <div className="info-section">
        <div className="info-section__text">
        <h1>Готовьте чемоданы, а с документами разберемся мы</h1>
        <p>Как мы можем облегчить процесс получения визы?</p>
        </div>

      <div className="info-section__card_wrapper">
      <Card header="Экономия времени" text="Мы подготавливаем документы для визы удаленно, вам остается только отнести их в визовый центр." />
        <Card header="Стоимость" text="Фиксированная цена, обговоренная заранее.
        Без неприятных сюрпризов!" />
        <Card header="Профессиональный подход" text="Сами скоординируем весь процесс, запишем на подачу." />
        <Card header="Оперативность" text="Подготавливаем стандартные пакеты документов за 2-3 дня." />
        <Card header="Коммуникация" text="Связываемся с клиентами через WhatsApp, Telegram, что позволяет мгновенно уведомлять клиента и получать от него информацию." />
      </div>

      </div>

    {/* stepssssssssssssssssssssssssssss */}
    <div className="steps-section">
      <div className="steps-section__header">
      Как происходит оформление визы
      </div>
    <div className="steps-section__item">
        <div className="steps-section__item__block">
            <div className="steps-section__item__col">
                <div className="steps-section__item__col_container">
                    <div className="steps-section__title">
                        Оценка шансов
                    </div>
                    <div className="steps-section__descr">
                        После того, как вы заполните онлайн-анкету, наш менеджер перезвонит и задаст уточняющие вопросы для оценки шансов получения визы.
                        Если у вас возникнут трудности с анкетой, позвоните нам по телефону: +7 (495) 22-777-12.
                    </div>
                </div>
            </div>
            <div className="steps-section__item__line"></div>
            <div className="steps-section__item__circle"></div>
        </div>
    </div>

    <div className="steps-section__item large">
      
        <div className="steps-section__item__block ">
            <div className="steps-section__item__col flipped">
                <div className="steps-section__item__col_container left">
                    <div className="steps-section__title">
                        Заключение договора
                    </div>
                    <div className="steps-section__descr">
                        После согласования всех нюансов, мы заключаем договор и приступаем к работе после 100% предоплаты.
                    </div>
                </div>
            </div>
            <div className="steps-section__item__line large "></div>
            <div className="steps-section__item__circle"></div>
        </div>
    </div>

    <div className="steps-section__item">
        <div className="steps-section__item__block">
            <div className="steps-section__item__col">
                <div className="steps-section__item__col_container ">
                    <div className="steps-section__title">
                        Оплата
                    </div>
                    <div className="steps-section__descr">
                        Наши услуги и визовый сбор можно оплатить в электронном виде.
                    </div>
                </div>
            </div>
            <div className="steps-section__item__line"></div>
            <div className="steps-section__item__circle"></div>
        </div>
    </div>
    
    <div className="steps-section__item large">
      
      <div className="steps-section__item__block ">
          <div className="steps-section__item__col flipped">
              <div className="steps-section__item__col_container left">
                  <div className="steps-section__title">
                  Подготовка документов
                                    </div>
                  <div className="steps-section__descr">
                  На основании предварительной анкеты на русском языке мы заполняем ваше заявление и записываем вас на подачу документов.
                  </div>
              </div>
          </div>
          <div className="steps-section__item__line large "></div>
          <div className="steps-section__item__circle"></div>
      </div>
  </div>

  <div className="steps-section__item">
        <div className="steps-section__item__block">
            <div className="steps-section__item__col">
                <div className="steps-section__item__col_container ">
                    <div className="steps-section__title">
                    Подача документов
                    </div>
                    <div className="steps-section__descr">
                    Вы идете в визовый центр с паспортом и подтверждением записи.
                    Остальные документы будут загружены в личный кабинет. Занимает около 30 минут.                    
                  </div>
                </div>
            </div>
            <div className="steps-section__item__line"></div>
            <div className="steps-section__item__circle"></div>
        </div>
    </div>

    <div className="steps-section__item large">
      
      <div className="steps-section__item__block ">
          <div className="steps-section__item__col flipped">
              <div className="steps-section__item__col_container left">
                  <div className="steps-section__title">
                  Получение и доставка                                    </div>
                  <div className="steps-section__descr">
                  При необходимости, мы получаем ваш паспорт с визой и доставляем курьером в любую точку Москвы.
                  </div>
              </div>
          </div>
          {/* <div className="steps-section__item__line large "></div> */}
          <div className="steps-section__item__circle"></div>
      </div>
  </div>

</div>




    <ContactForm/>
      


      <Footer></Footer>
    </div>
    
  );

 
};


