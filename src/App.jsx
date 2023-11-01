import React from 'react'
import './styles/App.css'
import logo from './assets/logo.svg'
import icon from './assets/icon.svg'
import AppStore from './assets/AppStore.jpg'
import GooglePlay from './assets/GooglePlay.jpg'
import firstInterior from './assets/firstInterior.jpg'
import secondInterior from './assets/secondInterior.jpg'
import thirdInterior from './assets/thirdInterior.jpg'
import firstProject from './assets/project6.jpg'
import secondProject from './assets/project1.jpg'
import thirdProject from './assets/project2.jpg'
import fourthProject from './assets/project3.jpg'
import fivesProject from './assets/project4.jpg'
import sixthProject from './assets/project5.jpg'
import arrow from './assets/arrow.svg'
import Image from './Components/Image.jsx'

function App() {

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="logo"> <a href="#"> <img src={logo} alt="" /> </a> </div>
          <div className="headerInf">
            <div className="subHeaderInf">
              <div className="list">
                <ol>
                  <li> <a href="#">О нас</a> </li>
                  <li> <a href="#">Проекты</a> </li>
                  <li> <a href="#">Материалы</a> </li>
                  <li> <a href="#">Отзывы</a> </li>
                </ol>
              </div>
              <p className='phone'>+7 999 999 99 99</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="textBlock">
            <h1>эксклюзивная и нестандартная мебель для дома</h1>
            <a href="#">заказать проект</a>
          </div>
          <div className="imgBlockPlausText">
            <p>Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.</p>
            <div className="imgBox">
              <img className='firstImg' src={firstInterior}/>
              <img src={secondInterior}/>
            </div>
          </div>
          <div className="info">
            <div className="ourExperience">
              <div className="textBlock">
                <h1>Более 5 лет создаем мебель для вашегокомфорта</h1>
                <div className="paragraphs">
                  <p>Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.</p>
                  <p>Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно. </p>
                  <p>В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.</p>
                </div>
              </div>
              <div className="numbersBlock">
                <div className="guarantee">
                  <h1>1 год</h1>
                  <p>гарантии на всю продукцию</p>
                </div>
                <div className="complitedProjects">
                  <h1>300+</h1>
                  <p>выполненных продуктов</p>
                </div>
                <div className="productionTime">
                  <h1>15 дней</h1>
                  <p>срок производства</p>
                </div>
              </div>
            </div>
            <div className="howWeWork">
              <div className="littleTextBlock">
                <h1>Как мы работаем</h1>
                <p>Алгоритм работы с нами для удобства и понимания проекта</p>
              </div>
              <div className="blocksWithInf">
                <div className="idea">
                  <h1>Идея</h1>
                  <p>Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или другой референс. А мы думаем над тем, как это реализовать, делаем технические чертежи и предлагаем решения по материалам.</p>
                </div>
                <div className="techTask">
                  <h1>Техническое задание</h1>
                  <p>Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты.</p>
                </div>
                <div className="commercialOffer">
                  <h1>Коммерческое предложение</h1>
                  <p>Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение</p>
                </div>
                <div className="preparingWorkingDraft">
                  <h1>Подготовка рабочего проекта</h1>
                  <p>Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству.</p>
                </div>
                <div className='production&Installation'>
                  <h1>Производство и монтаж</h1>
                  <p>Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это сделаем быстро и аккуратно.</p>
                </div>
              </div>
            </div>
            <div className="ourProjects">
              <h1>Проекты</h1>
              <div className="projectsPicts">
                <div className="firstProject projectPhoto">
                  <img src={firstProject} />
                  <div className="description">
                    <p>Тумба под телевизор</p>
                    <img src={arrow} />
                  </div>
                </div>
                <div className="secondProject">
                  <img src={secondProject} />
                </div>
                <div className="thirdProject">
                  <img src={thirdProject} />
                </div>
                <div className="fourthProject">
                  <img src={fourthProject} />
                </div>
                <div className="fivesProject">
                  <img src={fivesProject} />
                </div>
                <div className="sixthProject">
                  <img src={sixthProject} />
                </div>
              </div>
            </div>
            <div className="reviews">
              <h1>Отзывы</h1>
              <div className="reviewBlocks">
                <div className="firstBlock block">
                  <img src={icon}/>
                  <h1 className='personName'>Игорь Антонов</h1>
                  <p>Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.</p>
                </div>
                <div className="secondBlock block">
                  <img src={icon}/>
                  <h1 className='personName'>Ольга Иванова</h1>
                  <p>После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!</p>
                </div>
                <div className="thirdBlock block">
                  <img src={icon}/>
                  <h1 className='personName'>Аркадий Макаров</h1>
                  <p>Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!</p>
                </div>
              </div>
            </div>
            <div className="wantToOrder">
              <img src={thirdInterior} />
              <div className="formBlock">
                <h1>Хотите заказать проект?</h1>
                <p>Отправьте заявку, и мы вам перезвоним</p>
                <form>
                  <input type="text" placeholder='Имя'/>
                  <input type="email" placeholder='Email'/>
                  <input className='lastInput' type="tel" placeholder='Телефон'/>
                  <button>Отпарвить заявку</button>
                </form>
                <img src={AppStore} />
                <img src={GooglePlay} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="privatPolicy">
            <p className='firstP'>© 2023 Aveji</p>
            <p>Все права защищены</p>
            <p className='centralP'>Политика конфеденциальности / Оплата и доставка</p>
          </div>
          <div className="socialNetworks">
            <a href="#">Вконтакте</a>
            <a href="#">Телеграм</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
