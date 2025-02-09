import React from "react";
import Button from "../button";
import contactUsBg from "../../assets/contactUsBg.webp";
import contactUs from "../../assets/contactUs.png";
import "./styles.sass";

const ContactUs = () => {
  return (
    <div className='contactUs'>
      <div className='contactUsImg'>
        <img
          src={contactUsBg}
          alt='contactUsBg'
          className='img'
        />
      </div>
      <div className='contactUsContainer'>
        <div className='container'>
          <div className='contactUsContent'>
            <div className='contentImage'>
              <img
                src={contactUs}
                alt='contactUs'
                className='img'
              />
            </div>
            <div className='contentForm'>
              <div className='contentUpTitle'>
                <h5 className='title'>У вас есть вопросы? Отправьте заявку и мы с вами свяжемся!</h5>
              </div>
              <div className='contentTitle'>
                <h3 className='title'>Свяжитесь с нами</h3>
              </div>
              <form className='form'>
                <div className='formInput'>
                  <input
                    type='text'
                    className='input'
                    placeholder='Имя'
                  />
                </div>
                <div className='formInput'>
                  <input
                    type='email'
                    className='input'
                    placeholder='Почта'
                  />
                </div>
                <div className='formInput'>
                  <input
                    type='text'
                    className='input'
                    placeholder='Номер телефона'
                  />
                </div>
                <div className='formInput'>
                  <input
                    type='text'
                    className='input'
                    placeholder='Сообщение'
                  />
                </div>
                <div className='formBtn'>
                  <Button>Отправить заявку</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
