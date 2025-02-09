import React, { useState } from "react";
import Button from "../button";
import contactUsBg from "../../assets/contactUsBg.webp";
import contactUs from "../../assets/contactUs.png";
import "./styles.sass";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const BOT_TOKEN = "7443742656:AAFalQatheLhhYUjZrBIcTE1Lv001UVR0eU";
  const CHAT_ID = "-1002261642462";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `📩 Новая заявка:\n\n👤 Имя: ${formData.name}\n 💬 Почта: ${formData.email}\n 📞 Телефон: ${formData.phone}\n💬 Сообщение: ${formData.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });
      toast.success("Сообщение отправлено!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast.error("Ошибка отправки сообщения!");
    }
  };

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
              <form
                className='form'
                onSubmit={handleSubmit}
              >
                <div className='formInput'>
                  <input
                    type='text'
                    className='input'
                    placeholder='Имя'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='formInput'>
                  <input
                    type='email'
                    className='input'
                    placeholder='Почта'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='formInput'>
                  <input
                    type='text'
                    className='input'
                    placeholder='Номер телефона'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='formInput'>
                  <input
                    type='text'
                    className='input'
                    placeholder='Сообщение'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
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
